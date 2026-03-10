export default function Input({
    label,
    name,
    type = 'text',
    placeholder,
    required = false,
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
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className="form-input"
                {...props}
            />
        </div>
    );
}
