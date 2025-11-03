import React from "react";
import { View, Text, ScrollView } from "react-native";

const Table: React.FC<TableProps> = ({
  title,
  columns,
  data,
  maxHeight = "max-h-80",
  containerClassName = "bg-[#1A1A2E] rounded-lg p-6 mb-6",
  headerClassName = "bg-[#2A2A3E] p-4 rounded-t-lg border-b border-gray-600",
  rowClassName = "p-4 border-b border-gray-700 min-h-12",
  textClassName = "text-white text-sm",
  alternateRowColors = true,
  showScrollIndicator = true,
  emptyMessage = "No data available",
}) => {
  if (!data || data.length === 0) {
    return (
      <View className={containerClassName}>
        {title && (
          <Text className="text-white text-xl font-semibold mb-4">{title}</Text>
        )}
        <Text className="text-gray-400 text-center py-8">{emptyMessage}</Text>
      </View>
    );
  }

  const getColumnWidth = (column: TableColumn) => {
    return column.width || "flex-1";
  };

  const getTextAlign = (align?: string) => {
    switch (align) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      case "center":
      default:
        return "text-center";
    }
  };

  const renderCellContent = (item: any, column: TableColumn) => {
    const value = item[column.key];
    return value !== undefined && value !== null ? String(value) : "";
  };

  return (
    <View className={containerClassName}>
      {title && (
        <Text className="text-white text-xl font-semibold mb-4">{title}</Text>
      )}

      {/* Table Header */}
      <View className={`flex-row ${headerClassName}`}>
        {columns.map((column, index) => (
          <View
            key={index}
            className={`${getColumnWidth(column)} ${index > 0 ? "px-2" : ""}`}>
            <Text
              className={`text-gray-300 font-semibold ${getTextAlign(
                column.align
              )} text-sm`}>
              {column.title}
            </Text>
          </View>
        ))}
      </View>

      {/* Scrollable Table Rows */}
      <ScrollView
        className={maxHeight}
        showsVerticalScrollIndicator={showScrollIndicator}
        nestedScrollEnabled={true}>
        {data.map((item, rowIndex) => (
          <View
            key={item.id || rowIndex}
            className={`flex-row ${rowClassName} ${
              alternateRowColors && rowIndex % 2 === 0
                ? "bg-[#1F1F2E]"
                : "bg-[#2A2A3E]"
            }`}>
            {columns.map((column, colIndex) => (
              <View
                key={colIndex}
                className={`${getColumnWidth(column)} ${
                  colIndex > 0 ? "px-2" : ""
                } justify-center`}>
                <Text
                  className={`${textClassName} ${getTextAlign(
                    column.align
                  )} leading-5 ${column.key === "id" ? "font-medium" : ""}`}
                  numberOfLines={column.numberOfLines || 1}
                  ellipsizeMode="tail">
                  {renderCellContent(item, column)}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Table;
