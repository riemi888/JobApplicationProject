type StatCardProps = {
  title: string;
  value: number;
  description?: string;
};

function StatCard({ title, value, description }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-medium text-slate-500">{title}</p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900">{value}</h2>

      {description && (
        <p className="mt-2 text-sm text-emerald-600">{description}</p>
      )}
    </div>
  );
}

export default StatCard;