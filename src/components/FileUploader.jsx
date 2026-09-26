import { IoCloudUploadOutline, IoDocumentTextOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

const FileUploader = ({
  handleFileChange,
  attachments,
  onRemoveAttachment,
  name,
  label,
  hint,
  uploadedLabel,
  removeLabel,
}) => {
  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return "";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const getFileExtension = (filename) => {
    return filename.split(".").pop().toUpperCase();
  };

  return (
    <div className="space-y-4">
      <label
        htmlFor="file"
        className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition-all duration-200 hover:border-red-500 hover:bg-red-50 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500"
      >
        <div className="flex items-center gap-4">
          <IoCloudUploadOutline size={44} className="text-red-500" />
          <div>
            <h4 className="text-lg font-bold text-red-500">
              {label}
            </h4>
            <p className="text-sm text-slate-500">
              {hint}
            </p>
          </div>
        </div>
        <input
          type="file"
          id="file"
          multiple
          className="sr-only"
          name={name}
          onChange={handleFileChange}
        />
      </label>
      {attachments && attachments.length > 0 && (
        <div className="space-y-3">
          <h5 className="text-sm font-semibold text-slate-700">
            {uploadedLabel} ({attachments.length})
          </h5>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {attachments.map((attachment, index) => {
              const fileName =
                typeof attachment === "string" ? attachment : attachment.name;
              const fileSize =
                typeof attachment === "object" ? attachment.size : null;
              return (
                <div
                  key={`${fileName}-${index}`}
                  className="group relative flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-red-300 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <IoDocumentTextOutline size={20} className="text-red-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-700">
                      {fileName}
                    </p>
                    {fileSize && (
                      <p className="text-xs text-slate-500">
                        {formatFileSize(fileSize)}
                      </p>
                    )}
                    {!fileSize && (
                      <span className="inline-block rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        {getFileExtension(fileName)}
                      </span>
                    )}
                  </div>
                  {onRemoveAttachment && (
                    <button
                      type="button"
                      onClick={() => onRemoveAttachment(index)}
                      className="flex-shrink-0 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-1 focus:outline-none"
                      aria-label={`${removeLabel} ${fileName}`}
                    >
                      <IoClose size={18} />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

FileUploader.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
  attachments: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.number,
      }),
    ]),
  ),
  onRemoveAttachment: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  uploadedLabel: PropTypes.string.isRequired,
  removeLabel: PropTypes.string.isRequired,
};

export default FileUploader;
