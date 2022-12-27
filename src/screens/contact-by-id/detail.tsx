import React from "react";
import { Box, Heading, Text } from "native-base";
import { IDetailProps } from "./@types";

export function Detail({ icon, title, value }: IDetailProps) {
  return (
    <Box className="my-2">
      <Box className="flex-row gap-4">
        {icon}

        <Box className="ml-2">
          <Heading fontSize={18}>{title}</Heading>
          <Text fontSize={14}>{value}</Text>
        </Box>
      </Box>
    </Box>
  );
}
