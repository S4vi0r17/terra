import {
  WeddingGuestForm,
  WeddingGuestList,
  WeddingHeader,
  WeddingStats,
  WeddingSummaryCard,
} from '@/components/wedding';

export function WeddingPage() {
  return (
    <div className="space-y-8">
      <WeddingHeader />

      <WeddingStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <WeddingGuestForm />

        <WeddingGuestList />
      </div>

      <WeddingSummaryCard />
    </div>
  );
}
