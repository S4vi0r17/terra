import {
  Header,
  PeopleList,
  PersonForm,
  PersonPreview,
} from '@/components/people';

export function PeoplePage() {
  return (
    <div className="space-y-8">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PersonForm />

        <PersonPreview />
      </div>

      <PeopleList />
    </div>
  );
}
