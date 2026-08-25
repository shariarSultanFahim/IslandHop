import { createSearchParamsCache, parseAsString, parseAsStringEnum } from "nuqs/server";

export const tripTypeValues = ["one-way", "round-trip"] as const;
export type TripType = (typeof tripTypeValues)[number];

export const bookingSearchParamsParsers = {
  tripType: parseAsStringEnum<TripType>(["one-way", "round-trip"]).withDefault("one-way"),
  from: parseAsString.withDefault("Malé"),
  to: parseAsString.withDefault("Maafushi"),
  departureDate: parseAsString.withDefault("2026-05-24"),
  passengers: parseAsString.withDefault("1 Passenger")
};

export const bookingSearchParamsCache = createSearchParamsCache(bookingSearchParamsParsers);
