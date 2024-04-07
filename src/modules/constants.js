// Names of the meshes from the imported blender file
export const mesh = {
  icing: {
    top: "Material.002",
    bottom: "Material"
  },
  frosting: "Material.004", // TODO: Verify mesh name
  candle: {
    wax: "Material.005", // TODO: Verify mesh name
    wick: "Material.006", // TODO: Verify mesh name
  },
  base: {
    top: "Material.003", // TODO: Verify mesh name
    bottom: "Material.001", // TODO: Verify mesh name
  },
};

// Default color of meshes from the imported blender file
export const defaultColor = {
  icing: "#E700D5",
  frosting: "#E8106E",
  candle: "#0074E7",
  base: "#411900",
}