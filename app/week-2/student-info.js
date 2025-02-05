
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Ruskin Tanoy</h1>
      <p>
        GitHub Repository:{' '}
        <Link href="https://github.com/ruskintanoy/cprg306-assignments" target="_blank" rel="noopener noreferrer">
          Visit here
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
