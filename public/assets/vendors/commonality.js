$("#loginOut").on("click", () => {
    let loginOutBoolean = confirm("你确定要退出登陆吗");
    if (loginOutBoolean) {
        $.ajax({
            type: "post",
            url: "/logout",
            success: () => {
                location.href = "http://localhost:3000/admin/login.html";
            },
            error: () => {
                alert("退出失败")
            }
        })
    }
})
