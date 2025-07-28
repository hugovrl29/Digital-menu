import * as XLSX from 'xlsx';

export async function loadProductsFromXLSX() {
  const response = await fetch('/data/products.xlsx');
  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });

  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet);

  return data.map((row, index) => ({
    id: row.id ?? index,
    name: row.name,
    price: parseFloat(row.price),
    category: row.category,
    isRecommended:
      row.isRecommended === true ||
      row.isRecommended === 'true' ||
      row.isRecommended === 1 ||
      row.isRecommended === '1',
    image: row.image,
    description: row.description
  }));
}