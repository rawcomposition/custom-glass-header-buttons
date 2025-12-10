import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, View, type ImageStyle, type StyleProp, type ViewStyle } from "react-native";

type PressableIconProps = {
  icon: keyof typeof Ionicons.glyphMap;
  color?: string;
  size?: number;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
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
      <View
        style={[
          {
            width: size,
            height: size,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 8,
            borderRadius: 999,
            backgroundColor: "green",
          },
        ]}
      >
        <Ionicons name={icon} size={size * 0.6} color={iconColor} style={$imageStyleOverride} />
      </View>
    </TouchableOpacity>
  );
}
