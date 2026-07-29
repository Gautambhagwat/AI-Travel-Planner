import { Luggage, MapPin, Bell, Compass, Search } from "lucide-react";
import EmptyState from "../EmptyState";
import Button from "../Button";

export function NoTripsEmptyState({ onAction }) {
  return (
    <EmptyState
      icon={<Luggage size={28} />}
      title="No trips yet"
      description="Start planning your next adventure. Our AI will craft a personalized itinerary in minutes."
      action={
        onAction && (
          <Button onClick={onAction}>Plan your first trip</Button>
        )
      }
    />
  );
}

export function NoResultsEmptyState({ onAction }) {
  return (
    <EmptyState
      icon={<Search size={28} />}
      title="No results found"
      description="Try adjusting your filters or search terms to find what you're looking for."
      action={
        onAction && (
          <Button variant="outline" onClick={onAction}>Clear filters</Button>
        )
      }
    />
  );
}

export function NoNotificationsEmptyState() {
  return (
    <EmptyState
      icon={<Bell size={28} />}
      title="No notifications"
      description="You're all caught up! Trip reminders and weather alerts will appear here."
    />
  );
}

export function NoDestinationsEmptyState({ onAction }) {
  return (
    <EmptyState
      icon={<MapPin size={28} />}
      title="No destinations saved"
      description="Explore popular destinations and save your favorites for quick access."
      action={
        onAction && (
          <Button variant="outline" onClick={onAction}>Browse destinations</Button>
        )
      }
    />
  );
}

export function NoSearchResultsEmptyState({ query, onAction }) {
  return (
    <EmptyState
      icon={<Compass size={28} />}
      title="No matches for your search"
      description={
        query
          ? `We couldn't find anything matching "${query}". Try a different city or keyword.`
          : "Enter a destination name, country, or keyword to start exploring."
      }
      action={
        onAction && (
          <Button variant="ghost" onClick={onAction}>Clear search</Button>
        )
      }
    />
  );
}
