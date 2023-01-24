import { styles } from "@components/TextView/TextViewStyles";
import { Colors } from "@resources/Colors";
import { TextViewProps } from "@resources/Types";
import React from "react";
import { Text } from "react-native";

const { textColor } = Colors;

const TextView = (props: TextViewProps) => {
  const getTextSizes = (fontSize: { fontSize: number }) => {
    return fontSize.fontSize;
  };

  const renderTextView = () => {
    const {
      fontSubHeading,
      fontLargeTitle,
      fontTitle,
      fontDescription,
      fontBody,
      fontNote,
      fontSmall,
      fontExtraSmall,
      weightLight,
      weightRegular,
      weightMedium,
      weightBold,
    } = styles;

    const {
      children,
      style,
      subHeading,
      largeTitle,
      title,
      description,
      body,
      note,
      small,
      extraSmall,
      light,
      regular,
      medium,
      bold,
      color,
    } = props;

    let defaultWeight: {
      fontWeight: "normal" | "200" | "600" | "bold";
    } = weightRegular;
    if (regular) {
      defaultWeight = weightRegular;
    } else if (light) {
      defaultWeight = weightLight;
    } else if (medium) {
      defaultWeight = weightMedium;
    } else if (bold) {
      defaultWeight = weightBold;
    }

    let defaultStyle = [
      { fontSize: getTextSizes(fontDescription) },
      defaultWeight,
    ];

    let defaultColor = textColor;
    if (subHeading) {
      defaultStyle = [
        { fontSize: getTextSizes(fontSubHeading) },
        defaultWeight,
      ];
    } else if (largeTitle) {
      defaultStyle = [
        { fontSize: getTextSizes(fontLargeTitle) },
        defaultWeight,
      ];
    } else if (title) {
      defaultStyle = [{ fontSize: getTextSizes(fontTitle) }, defaultWeight];
    } else if (description) {
      defaultStyle = [
        { fontSize: getTextSizes(fontDescription) },
        defaultWeight,
      ];
    } else if (body) {
      defaultStyle = [{ fontSize: getTextSizes(fontBody) }, defaultWeight];
    } else if (note) {
      defaultStyle = [{ fontSize: getTextSizes(fontNote) }, defaultWeight];
    } else if (small) {
      defaultStyle = [{ fontSize: getTextSizes(fontSmall) }, defaultWeight];
    } else if (extraSmall) {
      defaultStyle = [
        { fontSize: getTextSizes(fontExtraSmall) },
        defaultWeight,
      ];
    }

    if (color !== undefined) {
      defaultColor = color;
    }

    return (
      <Text
        style={[
          defaultStyle,
          style,
          {
            color: defaultColor,
          },
        ]}
      >
        {children}
      </Text>
    );
  };

  return renderTextView();
};

export default TextView;
