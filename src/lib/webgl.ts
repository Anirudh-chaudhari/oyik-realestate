export function browserSupportsWebGL() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl2", { failIfMajorPerformanceCaveat: true }) ||
      canvas.getContext("webgl", { failIfMajorPerformanceCaveat: true }) ||
      canvas.getContext("experimental-webgl", { failIfMajorPerformanceCaveat: true });

    return Boolean(context);
  } catch {
    return false;
  }
}
