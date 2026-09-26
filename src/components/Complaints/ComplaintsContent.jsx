import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
import PageHero from "../common/PageHero";
import Button from "../common/Button";
import Input from "../Input";
import Select from "../Select";
import Textarea from "../Textarea";
import FileUploader from "../FileUploader";
import hero from "../../assets/hero.jpg";
import successGif from "../../assets/success.gif";
import useTranslation from "../../hooks/useTranslation";
import complaintsApi from "../../api/complaintsApi";

const initialForm = {
  name: "", email: "", phone: "", streetAddress: "", postcode: "", city: "",
  registrationNumber: "", mileageAtIncident: "", contactPerson: "",
  issue: "", faultLocation: "", description: "",
};
const issueValues = [
  "vehicle_defect", "listing_error", "insurance_or_invoice_error", "home_delivery_error",
];
const locationValues = [
  "engine", "transmission", "drivetrain", "chassis", "brakes",
  "tires", "body", "interior", "other",
];

const ComplaintsContent = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialForm);
  const [attachments, setAttachments] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: "" }));
  };

  const validate = () => {
    const next = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) next[key] = t("complaints.errors.required");
    });
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      next.email = t("complaints.errors.emailInvalid");
    }
    if (formData.phone && !/^[+\d\s().-]{7,25}$/.test(formData.phone.trim())) {
      next.phone = t("complaints.errors.phoneInvalid");
    }
    if (formData.mileageAtIncident &&
        (!/^(0|[1-9]\d*)$/.test(formData.mileageAtIncident) ||
          !Number.isSafeInteger(Number(formData.mileageAtIncident)))) {
      next.mileageAtIncident = t("complaints.errors.mileageInteger");
    }
    if (formData.description.trim() && formData.description.trim().length < 10) {
      next.description = t("complaints.errors.descriptionMinLength");
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting || !validate()) return;
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value.trim()));
    attachments.forEach((file) => data.append("attachments", file));
    setIsSubmitting(true);
    try {
      await complaintsApi.createComplaint(data);
      setSuccess(true);
      setFormData(initialForm);
      setAttachments([]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      toast.error(t(error.response?.status === 429
        ? "complaints.errors.rateLimited"
        : "complaints.errors.submitError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (event) => {
    const selected = Array.from(event.target.files || []);
    event.target.value = "";
    const combined = [...attachments, ...selected];
    if (combined.length > 3) {
      toast.error(t("complaints.errors.maxAttachments"));
      return;
    }
    if (combined.some((file) => file.size > 3 * 1024 * 1024) ||
        combined.reduce((size, file) => size + file.size, 0) > 9 * 1024 * 1024) {
      toast.error(t("complaints.errors.maxAttachmentSize"));
      return;
    }
    setAttachments(combined);
  };

  const input = (field, type = "text", extra = {}) => (
    <Input id={field} label={t(`complaints.form.labels.${field}`)} type={type}
      value={formData[field]} onChange={(event) => handleChange(field, event.target.value)}
      required error={errors[field]} maxLength={field === "email" ? 254 : 200} {...extra} />
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero title={t("complaints.hero.title")} subtitle={t("complaints.hero.subtitle")} image={hero} />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          {success ? (
            <section className="space-y-5 py-10 text-center" role="status">
              <img src={successGif} alt="" className="mx-auto w-16" />
              <h2 className="text-2xl font-bold text-slate-900">{t("complaints.success.title")}</h2>
              <p className="text-slate-600">{t("complaints.success.message")}</p>
              <Button variant="primary" size="large" onClick={() => setSuccess(false)}>
                {t("complaints.form.buttons.submitAnother")}
              </Button>
            </section>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-slate-900">{t("complaints.form.title")}</h1>
              <p className="mt-3 text-slate-600">{t("complaints.description")}</p>
              <form onSubmit={handleSubmit} className="mt-10 space-y-10">
                <section className="space-y-5">
                  <h2 className="border-b border-slate-200 pb-3 text-lg font-semibold text-slate-900">{t("complaints.form.sections.contact")}</h2>
                  <div className="grid gap-5 md:grid-cols-2">
                    {input("name")}
                    {input("email", "email")}
                    {input("phone", "tel")}
                    {input("streetAddress")}
                    {input("postcode", "text", { inputMode: "numeric" })}
                    {input("city")}
                  </div>
                </section>
                <section className="space-y-5">
                  <h2 className="border-b border-slate-200 pb-3 text-lg font-semibold text-slate-900">{t("complaints.form.sections.vehicle")}</h2>
                  <div className="grid gap-5 md:grid-cols-2">
                    {input("registrationNumber")}
                    {input("mileageAtIncident", "number", { step: "1", inputMode: "numeric" })}
                    {input("contactPerson", "text", { className: "md:col-span-2" })}
                  </div>
                </section>
                <section className="space-y-5">
                  <h2 className="border-b border-slate-200 pb-3 text-lg font-semibold text-slate-900">{t("complaints.form.sections.details")}</h2>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Select id="issue" label={t("complaints.form.labels.issue")} value={formData.issue}
                      onChange={(event) => handleChange("issue", event.target.value)}
                      options={issueValues.map((value) => ({ value, label: t(`complaints.form.issueOptions.${value}`) }))}
                      placeholder={t("complaints.form.selectPlaceholder")} required error={errors.issue} />
                    <Select id="faultLocation" label={t("complaints.form.labels.faultLocation")}
                      value={formData.faultLocation} onChange={(event) => handleChange("faultLocation", event.target.value)}
                      options={locationValues.map((value) => ({ value, label: t(`complaints.form.locationOptions.${value}`) }))}
                      placeholder={t("complaints.form.selectPlaceholder")} required error={errors.faultLocation} />
                  </div>
                  <Textarea id="description" label={t("complaints.form.labels.description")}
                    value={formData.description} onChange={(event) => handleChange("description", event.target.value)}
                    placeholder={t("complaints.form.placeholders.description")} rows={7} maxLength={5000}
                    required error={errors.description} />
                  <FileUploader name="attachments" attachments={attachments} handleFileChange={handleFileChange}
                    onRemoveAttachment={(index) => setAttachments((previous) => previous.filter((_, i) => i !== index))}
                    label={t("complaints.form.labels.attachments")}
                    hint={t("complaints.form.attachmentsHint")}
                    uploadedLabel={t("complaints.form.uploadedFiles")}
                    removeLabel={t("complaints.form.removeFile")} />
                </section>
                <Button type="submit" variant="primary" size="large" disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 md:w-auto">
                  {isSubmitting && <AiOutlineLoading3Quarters className="animate-spin" />}
                  {t(isSubmitting ? "complaints.form.buttons.submitting" : "complaints.form.buttons.submit")}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintsContent;
