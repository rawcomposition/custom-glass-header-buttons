import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
  TouchableOpacity,
  type ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { GlassView } from "@/components/glass-view";
import { iconRegistry } from "@/constants/icon-registry";

type PressableIconProps = {
  icon: keyof typeof iconRegistry;
  color?: string;
  size?: number;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const $imageStyleBase: StyleProp<ImageStyle> = {
  resizeMode: "contain",
};

export function PressableIcon(props: PressableIconProps) {
  const {
    icon,
    color,
    size = 44,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...pressableProps
  } = props;

  const $imageStyle: StyleProp<ImageStyle> = [
    $imageStyleBase,
    { tintColor: color ?? "#FFFFFF" },
    size !== undefined && { width: size * 0.6, height: size * 0.6 },
    $imageStyleOverride,
  ];

  const iconValue = iconRegistry[icon];
  const iconColor = color ?? "#FFFFFF";

  return (
    <TouchableOpacity
      {...pressableProps}
      style={[
        $containerStyleOverride,
        {
          width: size,
          height: size,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 999,
        },
      ]}
    >
      <GlassView
        style={{
          width: size,
          height: size,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 8,
          borderRadius: 999,
          backgroundColor: "green",
        }}
        glassEffectStyle="regular"
        isInteractive
      >
        {typeof iconValue === "object" && typeof iconValue !== "string" ? (
          iconValue
        ) : typeof iconValue === "string" ? (
          <Ionicons name={iconValue as keyof typeof Ionicons.glyphMap} size={size * 0.6} color={iconColor} />
        ) : (
          <Image style={$imageStyle} source={iconValue as ImageSourcePropType} />
        )}
      </GlassView>
    </TouchableOpacity>
  );
}
