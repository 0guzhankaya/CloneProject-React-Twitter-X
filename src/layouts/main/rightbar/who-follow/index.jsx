import React from "react";
import { useAccount } from "../../../../store/auth/hooks";
import SidebarSection from "../../../../components/sidebar-section";
import { whoFollowUsers } from "../../../../mock";
import UserCard from "../../../../components/user-card";

function WhoFollow() {
  const account = useAccount();

  return (
    <SidebarSection
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${account.id}`}
    >
      {whoFollowUsers.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </SidebarSection>
  );
}

export default WhoFollow;
