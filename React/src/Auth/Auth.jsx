import { useState } from "react";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const togglePannel = () => {
    setIsRegister(!isRegister);
  };
  return (
    <div className="flex justify-center h-screen items-center overflow-hidden">
      <div className="box lg:max-w-4xl">
        <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
          <div className="front">
            <img
              src="https://lh3.googleusercontent.com/pw/ABLVV86iB2W3EZA2ESgIKPsSRzSZvPcMLdK6FhG1gRRsI-SyzQpFE7Ci4fbE5sSRhGmjKJcbQokV54rl7TGufVNLFw8LmygSLvdunTOoo-PZe3C_3dEHR5_Aw78LT6obfJaXOpCnxuMfMmTjBPYRKetuqV3PkjvMu9BHlXHDkIjz4Y_OobcUDJ6Rg5Efl_sFlGkTTn3akvYnjPq9VhxAy2j70d_Us-J9kuuhNSt97ZkTZCH1Y6G5MRi4lt1ziw2eTwm2l9f3FRLXpd0pqxYkjUMKzNeWuiV2ydD1fxG60u9JByufjIY2Ur824Og7OaT5yuzFBgbU4JaQC_lPVFcpnlvsnaBWKJY6E2oMwRDWANs9ejaEvx9vDudFe3XNqKWefFxy38-dZKMnnMQ5fxGRn-u_ps4PVzKFBD52C6JgQKevnR-28l4hFK4xFqWOQzjJCpB15ZFxwKwjP_7EzQllpO5Juv9AjA6nawE9Ke10hqWaEqcK9b39tUN4Ek_ggr9q-v8AO7FixDxB-_FRQ32IjB9GwfZr7hmQq_qREmvf8Gg8uGKOibqbvTGuratnoS5MykKdUByi4YlvE9mc1BnQNxlHgiomQKv4lufLWW5rCCoMX6USXrxVaYEIOK93YKkdzIij_QuN3OYczI1BI-i9pcC69tu-OPQmlwQkzMii_naLZSfqdmaUHFfxW64NsApZ6yghn37O1u92RKf5ExLitjmoj6MAE81AQvsHlTgSLHlgjuyGtRHeN2o18PVeP-Cd3yEt8i-4yUPQ-euT7gt-RxdDoLjki5FNK6-itQG5Em3eGXSj7qi_wKa8-9wPTDQedDIBc1jP-DDDWndfdsE5AZiC3tiRaEDunta0OjdAKygVKN4mscIDOZNUfXm-WCmj5xfy3npvAqYtdEnWWAoq8825OJYyShkz=w1046-h636-s-no?authuser=0"
              alt=""
            />
            <div className="text">
              <span className="text1">
                If you are learning more then you are earning more
              </span>
              <span className="text2 text-xs">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img
              src="https://lh3.googleusercontent.com/pw/ABLVV85ZXiTTamlKVjs30WYHfefBzRr2_EPgN5guUfYulym8KZf75OQrvBKxnSYfagAIyXYFvdP9sZMZwNshBLRoQS8UkfZorJJAKl_FsclSjVqb3Lo8qt7CbSYAMtlZyAjmU79muDsXEqZ_07cp5hn4lZIlNTwCAv8v_VT19Yh4DHPl6FgFAu5MGAuGZ4F0-pKsw1ohKEsRIRYVjc6PXZKy1kno-r7o5e-kIqY-D3UrKGS64Cmbd-peqMPoaR3Fd8bfEztEzmjiKE1Enztyq8TFb4LTRfLvOMY6a_cPdhQ0xTUdRJXiUIrHnW2iQBHuhZtc8H1KBzvQX5qLYvhh-L7EKet0bbAiOWnMk-jZetk7fQf5_Xkcc3lJ9nN0eHKv_tEYBfPB_nK4K7d8vA8VZ49yRfTizPWUM9OnSZcyBxnvq0QtvPw-6Sw9gWprlTXDCpuGRI7dGjMOpxTfrU5a_fqXWSC8lp1EoE2loQTIuJBK-Q2Ms6X-czO6LhlGDOTyegJMWuvt0WkwgdshJGge_cRtSuRcUZPGjUoruHJVTnqxifcpQjlvcxbwM71Is708L-tH-30VDrL-cmvvD5G9w-EEdp1ZVK_WTp68FHGZKdnPwCJpEVfgj4N3GMtNAPerjpZEPeSMeGmyqmCxSYYeuioFrl7rxVea0zX4ls461Ib6rvRHhnHFvcgsy2rqZkx5f4Qvl2NJA1IqzcwsDMfO9Mr12Qngrj7Ns6gK-gHA7YRrWjgV1fdD1aMM05QzwUMuk_jFfA_LNPK31cOQEX8DHcW5Cu2NMJGeuXY63250nHCumlauVuMz7vJcPwr0O1jYGTeHoNhMA7vhPEfp9cgwjrL1Wrmfe9yTzfGGv5FtBfCg-I9o0Dk3uFEb43lU8l215FfM6HjViaS2Tg3rIYECqWGyM0UFu6uP=w997-h556-s-no?authuser=0"
              alt=""
            />
          </div>
        </div>
        <div className="forms h-full ">
          <div className="form-content h-full">
            <div className="login-form">loginform</div>

            <div className="signup-form">signupform</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
