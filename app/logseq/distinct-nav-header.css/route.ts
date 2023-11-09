import { Color } from "@/lib/color";

const css = (color: string) => `
.left-sidebar-inner .nav-content-item .header {
  background-color: ${color};
}
`;

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const color = searchParams.get("color") ?? Color.Green;
  return new Response(css(color));
}
