import classNames from "classnames";
import React from "react";
import { useAccount, useAccounts } from "../../../../../store/auth/hooks";

function More({ close }) {
  const currentAccount = useAccount();
  const accounts = useAccounts();
  return (
    <div>
      {accounts.map((account) => (
        <button
          type="button"
          disabled={currentAccount.id === account.id}
          onClick={() => {
            setCurrentAccount(account);
            close();
          }}
          className={classNames(
            "py-3 px-4 flex items-center text-left w-full transition-colors",
            { "hover:bg-[#eff3f41a]": currentAccount.id !== account.id }
          )}
        >
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
          <div className="mx-3 flex-1 text-[15px]">
            <h6 className="font-bold leading-[20px]">{account.fullname}</h6>
            <div className="text-[#71767b]">@{account.username}</div>
          </div>
          {currentAccount.id === account.id && (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/512px-Eo_circle_light-blue_checkmark.svg.png?20200417144731"
              width={16}
              height={16}
              className="mr-2 ml-3"
            />
          )}
        </button>
      ))}
      <div className="h-px bg-[#2f3336] my-3"></div>
      <button className="py-3 px-4 text-left transition-colors w-full hover:bg-[#eff3f41a] text-[#e7e9ea] text-[15px] font-bold leading-[20px]">
        Var olan bir hesap ekle
      </button>
      <button className="py-3 px-4 text-left transition-colors w-full hover:bg-[#eff3f41a] text-[#e7e9ea] text-[15px] font-bold leading-[20px]">
        Hesapları yönet
      </button>
      <button className="py-3 px-4 text-left transition-colors w-full hover:bg-[#eff3f41a] text-[#e7e9ea] text-[15px] font-bold leading-[20px]">
        <div className="max-w-[228px]">@oguzhankaya hesabından çıkış yap</div>
      </button>
    </div>
  );
}

export default More;
