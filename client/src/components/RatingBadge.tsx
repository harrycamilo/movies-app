import { Badge } from "@nextui-org/react";

export const RatingBadge = ({ rating }: {rating: number}) => {
  const resolveStatus = (movieRating: number) => {
    if (movieRating < 5) return "error";
    if (movieRating < 8) return "warning";
    return "success";
  };

  return (
    <Badge size={'lg'} color={resolveStatus(rating)} variant="bordered">
      {rating}
    </Badge>
  );
};
