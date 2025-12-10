import { BlurView } from "expo-blur";
import { type ViewProps } from "react-native";

type GlassViewProps = ViewProps & {
  glassEffectStyle?: "regular" | "light" | "dark";
  isInteractive?: boolean;
};

export function GlassView({ style, glassEffectStyle = "regular", isInteractive = false, ...props }: GlassViewProps) {
  const intensity = glassEffectStyle === "light" ? 20 : glassEffectStyle === "dark" ? 80 : 50;

  return <BlurView intensity={intensity} tint="light" style={[{ overflow: "hidden" }, style]} {...props} />;
}
