function UnitItem({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left flex items-center justify-between px-2 py-2 rounded hover:bg-[#403d60] transition-colors text-sm group"
    >
      <span className="group-hover:text-white text-gray-200">{label}</span>
      {active && <FaCheck className="text-xs text-blue-400" />}
    </button>
  );
}

export default UnitItem;

