import { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert != null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === 'error' && (
          <div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 flex-none mt-0.5"
            >
              <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
              <path
                strokeWidth="2"
                stroke="#B91C1C"
                d="M8 8l8 8M16 8l-8 8"
              ></path>
            </svg>
            <strong>{alert?.msg}</strong>
          </div>
        )}
      </p>
    )
  );
}

export default Alert;
