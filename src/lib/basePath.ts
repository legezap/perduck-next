const basePath = process.env.NODE_ENV === "production" ? "/the-butter-duck" : "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}

export default basePath;
