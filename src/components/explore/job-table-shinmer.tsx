const ShimmerTable = () => (
  <div className="animate-pulse overflow-x-auto rounded-2xl bg-white shadow-md">
    <table className="w-full border-collapse">
      <tbody>
        {Array.from({ length: 6 }).map((_, i) => (
          <tr key={i} className="border-b">
            {Array.from({ length: 6 }).map((_, j) => (
              <td key={j} className="px-6 py-4">
                <div className="h-4 w-full rounded bg-gray-200"></div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default ShimmerTable;
