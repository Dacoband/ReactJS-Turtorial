import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/_account.scss";

interface Account {
  accountId: string;
  roleName: string;
  email: string;
  password: string;
  insDate: string;
  updDate: string;
  delFlg: boolean;
}

const AccountDetail: React.FC = () => {
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const axiosInstance = axios.create({
    baseURL: "https://api.vol-ka.studio/api",
  });

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const response = await axiosInstance.get("/Account");
        const accountData = response.data[0]; // Giả định API trả về mảng các account, lấy phần tử đầu tiên
        setAccount(accountData);
        setLoading(false);
      } catch (err) {
        setError("Error fetching account data");
        setLoading(false);
      }
    };
    fetchAccountData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="account-detail">
      {account ? (
        <>
          <h2>Account Details</h2>
          <div className="account-info">
            <p>
              <strong>Account ID:</strong> {account.accountId}
            </p>
            <p>
              <strong>Role Name:</strong> {account.roleName}
            </p>
            <p>
              <strong>Email:</strong> {account.email}
            </p>
            <p>
              <strong>Password Hash:</strong> {account.password}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(account.insDate).toLocaleString()}
            </p>
            <p>
              <strong>Updated At:</strong>{" "}
              {new Date(account.updDate).toLocaleString()}
            </p>
            <p>
              <strong>Deleted:</strong> {account.delFlg ? "Yes" : "No"}
            </p>
          </div>
        </>
      ) : (
        <p>No account data available</p>
      )}
    </div>
  );
};

export default AccountDetail;
