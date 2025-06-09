import { WeddingGuestForm } from '@/components/wedding/WeddingGuestForm';
import { WeddingHeader } from '@/components/wedding/WeddingHeader';
import { WeddingStats } from '@/components/wedding/WeddingStats';

export function WeddingPage() {
  //   const getAttendanceStats = () => {
  //     const stats = { yes: 0, maybe: 0, no: 0, totalGuests: 0 }
  //     state.weddingGuests.forEach((guest) => {
  //       stats[guest.attendance]++
  //       if (guest.attendance === "yes") {
  //         stats.totalGuests += guest.guestCount
  //       }
  //     })
  //     return stats
  //   }

  //   const stats = getAttendanceStats()

  return (
    <div className="space-y-8">
      <WeddingHeader />

      {/* Stats */}
      <WeddingStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <WeddingGuestForm />

        {/* Guest List */}
      </div>

      {/* Summary Card */}
    </div>
  );
}
