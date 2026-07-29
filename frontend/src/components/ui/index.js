/**
 * AI Travel Planner — Design System
 *
 * Import components from this barrel file:
 *   import { Button, Card, EmptyState } from "@/components/ui";
 */

// Primitives
export { default as Button } from "./Button";
export { default as Input } from "./Input";
export { default as Textarea } from "./Textarea";
export { default as Select } from "./Select";
export { default as Checkbox } from "./Checkbox";
export { default as RadioGroup } from "./RadioGroup";
export { default as Switch } from "./Switch";

// Display
export { default as Badge } from "./Badge";
export { default as Chip } from "./Chip";
export { default as Avatar } from "./Avatar";
export { default as Divider } from "./Divider";

// Layout
export { default as Card } from "./Card";
export { default as PageHeader } from "./PageHeader";
export { default as SectionHeader } from "./SectionHeader";
export { default as Breadcrumb } from "./Breadcrumb";
export { default as Tabs } from "./Tabs";

// Feedback
export { default as Spinner } from "./Spinner";
export { default as Loader } from "./Loader";
export { default as LoadingScreen } from "./LoadingScreen";
export { default as Skeleton } from "./Skeleton";
export { default as EmptyState } from "./EmptyState";
export { default as ErrorState } from "./ErrorState";
export { ToastProvider, toast } from "./Toast";

// Overlays
export { default as Modal } from "./Modal";
export { default as Drawer } from "./Drawer";
export { default as Tooltip } from "./Tooltip";
export { default as Dropdown } from "./Dropdown";

// Search
export { default as SearchBar } from "./SearchBar";

// Cards
export { default as DestinationCard } from "./cards/DestinationCard";
export { default as TripCard } from "./cards/TripCard";
export { default as DashboardCard } from "./cards/DashboardCard";
export { default as InfoCard } from "./cards/InfoCard";
export { default as FeatureCard } from "./cards/FeatureCard";
export { default as StatCard } from "./cards/StatCard";
export { default as RecommendationCard } from "./cards/RecommendationCard";

// Presets
export {
  NoTripsEmptyState,
  NoResultsEmptyState,
  NoNotificationsEmptyState,
  NoDestinationsEmptyState,
  NoSearchResultsEmptyState,
} from "./empty-states";

export {
  DashboardSkeleton,
  PlannerSkeleton,
  TripDetailsSkeleton,
  SavedTripsSkeleton,
  DestinationListSkeleton,
} from "./skeletons";
