const features = [
  "Salary Breakdown Analytics",
  "Tax & Deduction Reports",
  "Employee Payroll History",
  "PF & ESI Insights",
  "Monthly & Yearly Summaries",
  "Export to PDF/Excel",
];

export default function FeatureGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">
        Key Payroll Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg mb-3"></div>
            <p className="text-gray-700 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}