function makeClaireproductsArray() {
  return [
    {
      id: 1,
      product_name: " first test",
      max_water_flow: "1 GPM",
      quantity_of_qd: "1 gram",
      prefiltration: "1 micron",
      unit_dimensions: "1 X 1 inch",
      expected_life: "1 gallon",
      operating_temperature: "1 ℉",
      inlet_outlet: "inch"
    },
    {
      id: 2,
      product_name: "second test",
      max_water_flow: "2 GPM",
      quantity_of_qd: "2 gram",
      prefiltration: "2 micron",
      unit_dimensions: "2 X 2inch",
      expected_life: "2 gallon",
      operating_temperature: "2 ℉",
      inlet_outlet: "2 inch"
    },
    {
      id: 3,
      product_name: "third test",
      max_water_flow: "3 GPM",
      quantity_of_qd: "3 gram",
      prefiltration: "3 micron",
      unit_dimensions: "3 X 3 inch",
      expected_life: "3 gallon",
      operating_temperature: "3 ℉",
      inlet_outlet: "3 inch"
    }
  ];
}
module.exports = { makeClaireproductsArray };
