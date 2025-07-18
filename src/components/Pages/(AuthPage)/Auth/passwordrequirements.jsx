import { CheckCircle, XCircle } from "lucide-react";

const PasswordRequirement = ({ label, isValid }) => (
  <div className="flex items-center gap-1 text-xs">
    {isValid ? (
      <CheckCircle className="text-green-600" size={14} />
    ) : (
      <XCircle className="text-gray-400" size={14} />
    )}
    <span className={isValid ? "text-green-700" : "text-gray-500"}>{label}</span>
  </div>
);

const PasswordRequirements = ({ password }) => {
  const checks = {
    length: password.length >= 6,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[!@#$%^&*]/.test(password),
  };

  return (
    <div className="mt-1 space-y-1">
      <PasswordRequirement label="At least 6 characters" isValid={checks.length} />
      <PasswordRequirement label="Contains 1 uppercase letter" isValid={checks.uppercase} />
      <PasswordRequirement label="Contains 1 number" isValid={checks.number} />
      <PasswordRequirement label="Contains 1 special character (!@#$%^&*)" isValid={checks.specialChar} />
    </div>
  );
};

export default PasswordRequirements;
