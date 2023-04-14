import { Card } from '@/shared/atoms';
import React, { ReactNode } from 'react';
import styles from './GeneralDetails.module.scss';
import { IUsersDetail } from '@/shared/types';

interface Props {
  data: IUsersDetail | undefined;
}

const Detail = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className={styles['detail']}>
      <div className={styles['detail__label']}>{label}</div>
      <div className={styles['detail__value']}>{value}</div>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className={styles['section']}>
      <div className={styles['title']}>{title}</div>
      <div className={styles['detail-container']}>{children}</div>
    </div>
  );
};

const GeneralDetails: React.FC<Props> = ({ data }) => {
  if (!data) return null;
  return (
    <Card className={styles['container']}>
      <Section title="Personal Information">
        <Detail
          label="Full Name"
          value={`${data.profile.firstName} ${data.profile.lastName}`}
        />
        <Detail label="Phone Number" value={data.profile.phoneNumber} />{' '}
        <Detail label="Email Address" value={data.email} />{' '}
        <Detail label="Bvn" value={data.profile.bvn} />{' '}
        <Detail label="Gender" value={data.profile.gender} />
        {/* NOTE: Couldnt find the data for this */}
        <Detail label="Marital Status" value={'Single'} />
        {/* NOTE: Couldnt find the data for this */}
        <Detail label="Children" value={'None'} />
        <Detail label="Type of Residence" value={'Parent’s Apartment'} />
      </Section>
      <Section title="Education and Employment">
        <Detail label="Level of education" value={data.education.level} />
        <Detail
          label="Employment Status"
          value={data.education.employmentStatus}
        />
        <Detail
          label="Duration of employment"
          value={data.education.duration}
        />
        <Detail label="Sector of employment" value={data.education.sector} />
        <Detail label="Office email" value={data.education.officeEmail} />
        <Detail
          label="Monthly income"
          value={`${data.profile.currency} ${data.education.monthlyIncome[0]}-${data.education.monthlyIncome[1]}`}
        />
        <Detail label="Loan repayment" value={data.education.loanRepayment} />
      </Section>
      <Section title="Socials">
        <Detail label="Facebook" value={data.socials.facebook} />
        <Detail label="Instagram" value={data.socials.instagram} />
        <Detail label="Twitter" value={data.socials.twitter} />
      </Section>
      <Section title="Guarantor">
        <Detail
          label="Full Name"
          value={`${data.guarantor.firstName} ${data.guarantor.lastName}`}
        />
        <Detail label="Phone Number" value={data.guarantor.phoneNumber} />
        {/* NOTE: The data provides address instead of email address so using that */}
        <Detail label="Address" value={data.guarantor.address} />
        {/* NOTE: The data is missing hence using hardcoded values */}
        <Detail label="Relationship" value={'Sister'} />
      </Section>
    </Card>
  );
};

export default GeneralDetails;
