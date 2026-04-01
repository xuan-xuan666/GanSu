<template>
    <div class="dance-page">
        <div class="main-content">
            <FilterSidebarComponent 
                v-model="selectedCategory" 
                :filter-groups="filterGroups" 
            />

            <div class="content-area">
                <!-- 动作捕捉数据库 - 飞天舞姿 -->
                <div class="overview-section" v-if="selectedCategory === 'feitian'">
                    <h3 class="section-title">飞天舞姿标准动作库</h3>
                    <div class="dance-stats">
                        <div class="stat-item">
                            <span class="stat-number">108</span>
                            <span class="stat-label">标准动作数量</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">12</span>
                            <span class="stat-label">动作系列</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">4K</span>
                            <span class="stat-label">动作捕捉精度</span>
                        </div>
                    </div>
                    <div class="resources-grid">
                        <div class="dance-card" v-for="dance in feitianDances" :key="dance.id">
                            <div class="card-preview">
                                <div class="preview-placeholder">
                                    <span class="preview-icon">💃</span>
                                </div>
                                <div class="action-count">{{ dance.actionCount }}个动作</div>
                            </div>
                            <div class="card-content">
                                <h4>{{ dance.name }}</h4>
                                <p class="dance-desc">{{ dance.description }}</p>
                                <div class="dance-meta">
                                    <span class="meta-tag">难度：{{ dance.difficulty }}</span>
                                    <span class="meta-tag">时长：{{ dance.duration }}</span>
                                </div>
                                <div class="card-actions">
                                    <button class="action-btn primary">▶️ 预览</button>
                                    <button class="action-btn">📥 下载数据</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 动作捕捉数据库 - 琵琶舞姿 -->
                <div class="overview-section" v-if="selectedCategory === 'pipa'">
                    <h3 class="section-title">琵琶舞姿标准动作库</h3>
                    <div class="dance-stats">
                        <div class="stat-item">
                            <span class="stat-number">56</span>
                            <span class="stat-label">标准动作数量</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">8</span>
                            <span class="stat-label">动作系列</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">4K</span>
                            <span class="stat-label">动作捕捉精度</span>
                        </div>
                    </div>
                    <div class="resources-grid">
                        <div class="dance-card" v-for="dance in pipaDances" :key="dance.id">
                            <div class="card-preview">
                                <div class="preview-placeholder">
                                    <span class="preview-icon">🎵</span>
                                </div>
                                <div class="action-count">{{ dance.actionCount }}个动作</div>
                            </div>
                            <div class="card-content">
                                <h4>{{ dance.name }}</h4>
                                <p class="dance-desc">{{ dance.description }}</p>
                                <div class="dance-meta">
                                    <span class="meta-tag">难度：{{ dance.difficulty }}</span>
                                    <span class="meta-tag">时长：{{ dance.duration }}</span>
                                </div>
                                <div class="card-actions">
                                    <button class="action-btn primary">▶️ 预览</button>
                                    <button class="action-btn">📥 下载数据</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 动作捕捉数据库 - 胡旋舞姿 -->
                <div class="overview-section" v-if="selectedCategory === 'huxuan'">
                    <h3 class="section-title">胡旋舞姿标准动作库</h3>
                    <div class="dance-stats">
                        <div class="stat-item">
                            <span class="stat-number">72</span>
                            <span class="stat-label">标准动作数量</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">10</span>
                            <span class="stat-label">动作系列</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">4K</span>
                            <span class="stat-label">动作捕捉精度</span>
                        </div>
                    </div>
                    <div class="resources-grid">
                        <div class="dance-card" v-for="dance in huxuanDances" :key="dance.id">
                            <div class="card-preview">
                                <div class="preview-placeholder">
                                    <span class="preview-icon">🌀</span>
                                </div>
                                <div class="action-count">{{ dance.actionCount }}个动作</div>
                            </div>
                            <div class="card-content">
                                <h4>{{ dance.name }}</h4>
                                <p class="dance-desc">{{ dance.description }}</p>
                                <div class="dance-meta">
                                    <span class="meta-tag">难度：{{ dance.difficulty }}</span>
                                    <span class="meta-tag">时长：{{ dance.duration }}</span>
                                </div>
                                <div class="card-actions">
                                    <button class="action-btn primary">▶️ 预览</button>
                                    <button class="action-btn">📥 下载数据</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 服饰研究 - 历代服饰复原 -->
                <div class="overview-section" v-if="selectedCategory === 'clothing'">
                    <h3 class="section-title">历代服饰复原</h3>
                    <div class="clothing-grid">
                        <div class="clothing-card" v-for="item in clothingItems" :key="item.id">
                            <div class="clothing-image">
                                <div class="image-placeholder">
                                    <span class="image-icon">👘</span>
                                </div>
                                <span class="dynasty-tag">{{ item.dynasty }}</span>
                            </div>
                            <div class="clothing-content">
                                <h4>{{ item.name }}</h4>
                                <p class="clothing-desc">{{ item.description }}</p>
                                <div class="clothing-meta">
                                    <span class="meta-item">材质：{{ item.material }}</span>
                                    <span class="meta-item">工艺：{{ item.craftsmanship }}</span>
                                </div>
                                <div class="card-actions">
                                    <button class="action-btn primary">👁️ 3D 查看</button>
                                    <button class="action-btn">📖 详情</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 服饰研究 - 配饰 3D 模型 -->
                <div class="overview-section" v-if="selectedCategory === 'accessories'">
                    <h3 class="section-title">配饰 3D 模型库</h3>
                    <div class="model-grid">
                        <div class="model-card" v-for="model in accessoryModels" :key="model.id">
                            <div class="model-preview">
                                <div class="preview-3d">
                                    <span class="preview-icon">📿</span>
                                </div>
                                <span class="model-type">{{ model.type }}</span>
                            </div>
                            <div class="model-content">
                                <h4>{{ model.name }}</h4>
                                <p class="model-desc">{{ model.description }}</p>
                                <div class="model-meta">
                                    <span class="meta-tag">朝代：{{ model.dynasty }}</span>
                                    <span class="meta-tag">面数：{{ model.polygons }}</span>
                                </div>
                                <div class="card-actions">
                                    <button class="action-btn primary">🔄 3D 预览</button>
                                    <button class="action-btn">📥 下载模型</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 教学资源 - 舞蹈分解教学 -->
                <div class="overview-section" v-if="selectedCategory === 'teaching'">
                    <h3 class="section-title">舞蹈分解教学视频</h3>
                    <div class="teaching-grid">
                        <div class="teaching-card" v-for="video in teachingVideos" :key="video.id">
                            <div class="video-thumbnail">
                                <div class="thumbnail-placeholder">
                                    <span class="play-button">▶</span>
                                </div>
                                <span class="video-duration">{{ video.duration }}</span>
                            </div>
                            <div class="video-content">
                                <h4>{{ video.title }}</h4>
                                <p class="video-desc">{{ video.description }}</p>
                                <div class="video-meta">
                                    <span class="meta-item">讲师：{{ video.instructor }}</span>
                                    <span class="meta-item">难度：{{ video.difficulty }}</span>
                                </div>
                                <div class="card-actions">
                                    <button class="action-btn primary">▶️ 播放</button>
                                    <button class="action-btn">📋 课程大纲</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 教学资源 - 乐队配乐库 -->
                <div class="overview-section" v-if="selectedCategory === 'music'">
                    <h3 class="section-title">敦煌舞蹈乐队配乐库</h3>
                    <div class="music-grid">
                        <div class="music-card" v-for="music in musicTracks" :key="music.id">
                            <div class="music-cover">
                                <div class="cover-placeholder">
                                    <span class="music-icon">🎼</span>
                                </div>
                                <span class="music-type">{{ music.type }}</span>
                            </div>
                            <div class="music-content">
                                <h4>{{ music.title }}</h4>
                                <p class="music-desc">{{ music.description }}</p>
                                <div class="music-meta">
                                    <span class="meta-tag">时长：{{ music.duration }}</span>
                                    <span class="meta-tag">乐器：{{ music.instruments }}</span>
                                </div>
                                <div class="music-actions">
                                    <button class="action-btn primary">▶️ 播放</button>
                                    <button class="action-btn">📥 下载音频</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import FilterSidebarComponent from '../components/FilterSidebarComponent.vue'

const selectedCategory = ref('feitian')

const filterGroups = [
    {
        title: '动作捕捉数据库',
        items: [
            { label: '飞天舞姿（108 个标准动作）', value: 'feitian' },
            { label: '琵琶舞姿', value: 'pipa' },
            { label: '胡旋舞姿', value: 'huxuan' }
        ]
    },
    {
        title: '服饰研究',
        items: [
            { label: '历代服饰复原', value: 'clothing' },
            { label: '配饰 3D 模型', value: 'accessories' }
        ]
    },
    {
        title: '教学资源',
        items: [
            { label: '舞蹈分解教学', value: 'teaching' },
            { label: '乐队配乐库', value: 'music' }
        ]
    }
]

const feitianDances = [
    {
        id: 1,
        name: '反弹琵琶',
        actionCount: 24,
        description: '敦煌壁画经典反弹琵琶动作，展现飞天舞姿的优美与灵动',
        difficulty: '高级',
        duration: '3 分钟'
    },
    {
        id: 2,
        name: '凌空翱翔',
        actionCount: 18,
        description: '模拟飞天在空中自由翱翔的姿态，动作舒展大气',
        difficulty: '中级',
        duration: '2 分 30 秒'
    },
    {
        id: 3,
        name: '散花飞舞',
        actionCount: 20,
        description: '表现飞天散花时的轻盈舞姿，手部动作细腻',
        difficulty: '中级',
        duration: '2 分 45 秒'
    },
    {
        id: 4,
        name: '乘云驾雾',
        actionCount: 22,
        description: '展现飞天乘云而行的动态，强调身体的流动性',
        difficulty: '高级',
        duration: '3 分 15 秒'
    },
    {
        id: 5,
        name: '伎乐飞天',
        actionCount: 24,
        description: '演奏乐器的飞天形象，融合音乐与舞蹈',
        difficulty: '高级',
        duration: '3 分 30 秒'
    }
]

const pipaDances = [
    {
        id: 1,
        name: '横抱琵琶',
        actionCount: 16,
        description: '唐代横抱琵琶的经典姿势，展现宫廷乐舞风韵',
        difficulty: '中级',
        duration: '2 分钟'
    },
    {
        id: 2,
        name: '竖抱琵琶',
        actionCount: 14,
        description: '竖抱琵琶演奏姿态，动作优雅端庄',
        difficulty: '初级',
        duration: '1 分 45 秒'
    },
    {
        id: 3,
        name: '琵琶轮指',
        actionCount: 12,
        description: '琵琶轮指技法的舞蹈化表现',
        difficulty: '高级',
        duration: '2 分 15 秒'
    },
    {
        id: 4,
        name: '反弹琵琶',
        actionCount: 14,
        description: '琵琶舞姿中最具代表性的反弹动作',
        difficulty: '特级',
        duration: '2 分 30 秒'
    }
]

const huxuanDances = [
    {
        id: 1,
        name: '急速旋转',
        actionCount: 18,
        description: '胡旋舞核心旋转技巧，展现连续快速旋转',
        difficulty: '特级',
        duration: '2 分 20 秒'
    },
    {
        id: 2,
        name: '踏步旋转',
        actionCount: 16,
        description: '结合踏步的旋转动作，节奏感强烈',
        difficulty: '高级',
        duration: '2 分钟'
    },
    {
        id: 3,
        name: '摆臂旋身',
        actionCount: 14,
        description: '手臂摆动配合身体旋转，动作流畅',
        difficulty: '中级',
        duration: '1 分 50 秒'
    },
    {
        id: 4,
        name: '跳跃旋转',
        actionCount: 12,
        description: '跳跃与旋转的结合，展现轻盈灵动',
        difficulty: '高级',
        duration: '1 分 40 秒'
    },
    {
        id: 5,
        name: '胡旋舞组合',
        actionCount: 12,
        description: '多个胡旋舞经典动作的组合编排',
        difficulty: '高级',
        duration: '2 分 30 秒'
    }
]

const clothingItems = [
    {
        id: 1,
        name: '唐代飞天服饰复原',
        dynasty: '唐代',
        description: '根据莫高窟第 320 窟壁画复原的唐代飞天服饰',
        material: '真丝纱罗',
        craftsmanship: '手工刺绣'
    },
    {
        id: 2,
        name: '北魏舞伎服饰',
        dynasty: '北魏',
        description: '北魏时期舞伎表演服装的复原研究',
        material: '织锦缎',
        craftsmanship: '传统织造'
    },
    {
        id: 3,
        name: '西夏供养人服饰',
        dynasty: '西夏',
        description: '西夏供养人壁画中的服饰复原',
        material: '棉麻混纺',
        craftsmanship: '蜡染工艺'
    },
    {
        id: 4,
        name: '元代乐舞服饰',
        dynasty: '元代',
        description: '元代敦煌乐舞表演服装',
        material: '织金锦',
        craftsmanship: '金线刺绣'
    }
]

const accessoryModels = [
    {
        id: 1,
        name: '飞天飘带 3D 模型',
        type: '服饰配件',
        description: '飞天飞舞时飘带的 3D 动态模型',
        dynasty: '唐代',
        polygons: '15,000'
    },
    {
        id: 2,
        name: '琵琶乐器 3D 模型',
        type: '乐器道具',
        description: '唐代曲项琵琶的高精度 3D 模型',
        dynasty: '唐代',
        polygons: '28,000'
    },
    {
        id: 3,
        name: '璎珞配饰 3D 模型',
        type: '首饰配饰',
        description: '飞天佩戴的璎珞饰品 3D 模型',
        dynasty: '北魏',
        polygons: '12,000'
    },
    {
        id: 4,
        name: '宝冠头饰 3D 模型',
        type: '头饰',
        description: '敦煌飞天宝冠的精细 3D 复原',
        dynasty: '唐代',
        polygons: '20,000'
    },
    {
        id: 5,
        name: '腰饰玉佩 3D 模型',
        type: '首饰配饰',
        description: '古代舞者腰间玉佩的 3D 模型',
        dynasty: '西夏',
        polygons: '8,000'
    }
]

const teachingVideos = [
    {
        id: 1,
        title: '反弹琵琶基础动作分解',
        description: '详细讲解反弹琵琶的手部、腰部、脚步动作要领',
        duration: '25:30',
        instructor: '李美华',
        difficulty: '中级'
    },
    {
        id: 2,
        title: '飞天舞姿气息训练',
        description: '学习飞天舞蹈中的呼吸控制与气息运用',
        duration: '18:45',
        instructor: '张雪梅',
        difficulty: '初级'
    },
    {
        id: 3,
        title: '胡旋舞旋转技巧精讲',
        description: '系统讲解胡旋舞连续旋转的技巧与训练方法',
        duration: '32:15',
        instructor: '王丽娜',
        difficulty: '高级'
    },
    {
        id: 4,
        title: '敦煌舞手姿详解',
        description: '敦煌舞蹈中各种手姿的形态与含义',
        duration: '22:00',
        instructor: '陈雅文',
        difficulty: '初级'
    },
    {
        id: 5,
        title: '完整剧目《丝路花雨》教学',
        description: '经典敦煌舞剧《丝路花雨》选段教学',
        duration: '45:00',
        instructor: '李美华',
        difficulty: '高级'
    }
]

const musicTracks = [
    {
        id: 1,
        title: '飞天舞曲',
        type: '独奏曲',
        description: '专为飞天舞姿创作的配乐，融合古筝与笛子',
        duration: '5:30',
        instruments: '古筝、笛子'
    },
    {
        id: 2,
        title: '反弹琵琶',
        type: '琵琶独奏',
        description: '经典琵琶曲目，配合反弹琵琶舞姿',
        duration: '4:45',
        instruments: '琵琶'
    },
    {
        id: 3,
        title: '胡旋舞乐',
        type: '合奏曲',
        description: '西域风格的胡旋舞伴奏音乐',
        duration: '6:20',
        instruments: '琵琶、箜篌、打击乐'
    },
    {
        id: 4,
        title: '敦煌谣',
        type: '声乐',
        description: '以敦煌为主题的原创声乐作品',
        duration: '4:15',
        instruments: '人声、古筝'
    },
    {
        id: 5,
        title: '丝路印象',
        type: '组曲',
        description: '丝绸之路主题的大型舞蹈组曲配乐',
        duration: '12:30',
        instruments: '全编制民族乐团'
    },
    {
        id: 6,
        title: '伎乐天',
        type: '合奏曲',
        description: '表现伎乐飞天形象的古典乐曲',
        duration: '5:50',
        instruments: '笛子、笙、琵琶'
    }
]
</script>

<style scoped>
.dance-page {
    min-height: 100vh;
}

.main-content {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
    gap: 20px;
}

.content-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.overview-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.section-title {
    font-size: 20px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e0e0e0;
}

.dance-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 25px;
}

.stat-item {
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 8px;
}

.stat-label {
    font-size: 14px;
    opacity: 0.9;
}

.resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
}

.dance-card,
.clothing-card,
.model-card,
.teaching-card,
.music-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    transition: all 0.3s;
}

.dance-card:hover,
.clothing-card:hover,
.model-card:hover,
.teaching-card:hover,
.music-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.card-preview,
.clothing-image,
.model-preview,
.video-thumbnail,
.music-cover {
    position: relative;
    height: 180px;
    overflow: hidden;
}

.preview-placeholder,
.image-placeholder,
.preview-3d,
.thumbnail-placeholder,
.cover-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
}

.action-count,
.dynasty-tag,
.model-type,
.video-duration,
.music-type {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 12px;
    background: rgba(0,93,166,0.9);
    color: #fff;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.card-content,
.clothing-content,
.model-content,
.video-content,
.music-content {
    padding: 20px;
}

.card-content h4,
.clothing-content h4,
.model-content h4,
.video-content h4,
.music-content h4 {
    font-size: 18px;
    color: #1a237e;
    margin-bottom: 10px;
    font-weight: 600;
}

.dance-desc,
.clothing-desc,
.model-desc,
.video-desc,
.music-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 12px;
}

.dance-meta,
.clothing-meta,
.model-meta,
.video-meta,
.music-meta {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.meta-tag,
.meta-item {
    padding: 4px 12px;
    background: #e3f2fd;
    border-radius: 15px;
    font-size: 12px;
    color: #005da6;
}

.card-actions,
.music-actions {
    display: flex;
    gap: 10px;
}

.action-btn {
    flex: 1;
    padding: 8px 15px;
    border: none;
    border-radius: 8px;
    background: #f5f5f5;
    color: #333;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.action-btn:hover {
    background: #e0e0e0;
}

.action-btn.primary {
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
}

.action-btn.primary:hover {
    background: linear-gradient(135deg, #0079b8 0%, #005da6 100%);
}

.clothing-grid,
.model-grid,
.teaching-grid,
.music-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
}

.play-button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(0,93,166,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
}

.play-button:hover {
    background: rgba(0,93,166,1);
    transform: scale(1.1);
}
</style>
