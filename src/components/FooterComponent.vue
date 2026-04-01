<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-links">
                <div class="footer-column">
                    <h4>关于我们</h4>
                    <ul>
                        <li><a href="javascript:;">中心简介</a></li>
                        <li><a href="javascript:;">组织机构</a></li>
                        <li><a href="javascript:;">联系我们</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>数据资源</h4>
                    <ul>
                        <li><a href="javascript:;">数据申请入口</a></li>
                        <li><a href="javascript:;">API开发文档</a></li>
                        <li><a href="javascript:;">数据服务</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>专题数据</h4>
                    <ul>
                        <li><a href="https://traveldata.yougansu.com/visualC/#/">如意甘肃文旅大数据平台</a></li>
                        <li><a href="javascript:;">生态保护</a></li>
                        <li><a href="javascript:;">气候变化</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>技术支持</h4>
                    <ul>
                        <li><a href="javascript:;">帮助中心</a></li>
                        <li><a href="javascript:;">常见问题</a></li>
                        <li><a href="javascript:;">意见反馈</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2026 甘肃文旅融合科学数据中心 版权所有</p>
                <p>备案号：陇ICP备12345678号</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
    background: #1a237e;
    color: #fff;
    padding: 50px 0 20px;
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-bottom: 40px;
    justify-items: center;
}

.footer-column h4 {
    font-size: 16px;
    margin-bottom: 15px;
    color: #4fc3f7;
}

.footer-column ul li {
    margin-bottom: 8px;
}

.footer-column ul li a {
    color: #b3e5fc;
    font-size: 14px;
}

.footer-column ul li a:hover {
    color: #fff;
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255,255,255,0.1);
}

.footer-bottom p {
    font-size: 14px;
    color: #b3e5fc;
    margin-bottom: 5px;
}

@media (max-width: 768px) {
    .footer-links {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
