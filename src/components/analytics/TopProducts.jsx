import { topProducts } from "../../Pages/analytics/data/analyticsData";

const TopProducts = () => {
  const max = Math.max(...topProducts.map((p) => p.units));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 className="text-sm font-bold text-gray-800 mb-4">
        Top Selling Products
      </h3>
      <div className="space-y-4">
        {topProducts.map((product) => (
          <div key={product.name}>
            <div className="flex justify-between items-baseline mb-1">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {product.name}
                </p>
                <p className="text-xs text-gray-400">
                  {product.units} units sold
                </p>
              </div>
              <span className="text-sm font-bold text-gray-700 ml-4 whitespace-nowrap">
                $ {product.revenue.toFixed(2)}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div
                className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${(product.units / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
