/* eslint-disable no-unused-vars */
import {
  UserCircle, Building2, MapPin, Store,
  FileText, CreditCard, CheckCircle2,
} from "lucide-react";
import { useSignup } from "./SignupContext";

const steps = [
  { label: "Account Setup", icon: UserCircle },
  { label: "Business Info", icon: Building2 },
  { label: "Location",      icon: MapPin },
  { label: "Store Setup",   icon: Store },
  { label: "Documents",     icon: FileText },
  { label: "Payment",       icon: CreditCard },
  { label: "Review",        icon: CheckCircle2 },
];

const SetupSidebar = () => {
  const { step } = useSignup
  ();

  return (
    <aside className="w-44 flex-shrink-0 pt-2 pr-4">
      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-4">
        Setup Progress
      </p>
      <ol className="relative space-y-0">
        {steps.map((s, i) => {
          const done    = i < step;
          const active  = i === step;
          const pending = i > step;
          const Icon    = s.icon;

          return (
            <li key={s.label} className="flex items-start gap-2.5 relative">
              {/* Vertical connector line */}
              {i < steps.length - 1 && (
                <div className={`absolute left-[13px] top-7 w-0.5 h-6 ${done ? "bg-green-500" : "bg-gray-200"}`} />
              )}

              {/* Circle icon */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border-2 z-10 mt-0.5 transition-all ${
                  done   ? "bg-green-600  border-green-600" :
                  active ? "border-green-600 bg-white" :
                           "border-gray-300 bg-white"
                }`}
              >
                <Icon
                  size={13}
                  className={
                    done   ? "text-white" :
                    active ? "text-green-600" :
                             "text-gray-300"
                  }
                />
              </div>

              {/* Label */}
              <span
                className={`text-xs mt-1 font-medium leading-tight pb-6 ${
                  done   ? "text-green-600" :
                  active ? "text-green-700 font-semibold" :
                           "text-gray-400"
                }`}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
};

export default SetupSidebar;