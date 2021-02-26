declare module '*.png' {
  const resource: string;
  export = resource;
}
declare module '*.svg' {
  const resource: string;
  export = resource;
}
declare module '*.css' {
  const resource: any;
  export default resource;
}
declare module '*.pcss' {
  const resource: string;
  export default resource;
}
