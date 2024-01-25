import React from "react";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

export default function Profile() {
  const { user } = useAuth();
  const [role] = useRole();
  console.log(user);
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl sm:ml-64 relative">
        <figure>
          <img src={user?.photoURL} alt="images" className="rounded-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {user?.displayName}
            <div className="badge badge-secondary absolute top-20 left-40 px-4 py-2 font-bold">
              {role}
            </div>
          </h2>
          <p>some random text</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">function1</div>
            <div className="badge badge-outline">function2</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
