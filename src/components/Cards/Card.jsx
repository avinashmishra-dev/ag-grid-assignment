const Card = ({ cardTitle, cardData, Icon, borderLeftColor }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow p-6 border-l-4 ${borderLeftColor} w-full`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-600 font-medium">{cardTitle}</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">
            {cardData}
          </p>
        </div>
        {Icon}
      </div>
    </div>
  );
};

export default Card;
