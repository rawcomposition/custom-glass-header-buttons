import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export function useAppTheme() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return {
    theme: {
      colors: {
        text: theme.text,
        background: theme.background,
        tint: theme.tint,
        icon: theme.icon,
      },
    },
  };
}
