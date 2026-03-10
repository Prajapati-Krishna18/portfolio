export default function Textarea({
    label,
    name,
    placeholder,
    required = false,
    rows = 5,
    value,
    onChange,
    ...props
}) {
    return (
        <div>
            {label && (
                <label htmlFor={name} className="form-label">
                    {label} {required && <span className="text-pink-400">*</span>}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                required={required}
                rows={rows}
                value={value}
                onChange={onChange}
                className="form-input resize-none"
                style={{ minHeight: '140px' }}
                {...props}
            />
        </div>
    );
}
