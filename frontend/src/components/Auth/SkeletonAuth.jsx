import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonAuth = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <Skeleton width={200} height={30} /> {/* Title */}
      <Skeleton width={250} height={50} /> {/* Google Sign-in Button */}
      <Skeleton width={200} height={20} /> {/* "or sign in with email" */}
      <Skeleton width={300} height={40} /> {/* Username field */}
      <Skeleton width={300} height={40} /> {/* Password field */}
      <Skeleton width={300} height={50} /> {/* Sign-in Button */}
      <Skeleton width={250} height={20} /> {/* Sign-up link */}
    </div>
  );
};

export default SkeletonAuth;
