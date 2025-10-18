<script lang="ts">
	import { BlocksRenderer, type BlocksContent } from '$lib';

	// Sample content to test the blocks renderer
	let content = $state<BlocksContent>([
		{
			type: 'heading',
			level: 4,
			children: [
				{
					bold: true,
					text: 'การเสริมสร้างความร่วมมือกับ Delfin',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'บริษัท Kinetic Engineering ได้เสริมสร้างความร่วมมือกับ Delfin Industrial Vacuums ผู้ผลิตระบบเครื่องดูดฝุ่นอุตสาหกรรมชั้นนำระดับโลกจากประเทศอิตาลี ความร่วมมือนี้มุ่งเน้นการส่งมอบโซลูชันเครื่องดูดฝุ่นอุตสาหกรรมขั้นสูงให้กับลูกค้าในประเทศไทย พร้อมทั้งยกระดับมาตรฐานการบริการของเราผ่านการฝึกอบรมเชิงลึกสำหรับทีมงานและพันธมิตรของเรา',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'ในฐานะตัวแทนจำหน่ายอย่างเป็นทางการในประเทศไทย ทีมงานของเราได้เดินทางไปยังโรงงานผลิตของ Delfin Industrial Vacuums ในเมืองตูริน ประเทศอิตาลี (Strada della Merla, 49/a 10036 Settimo T.se (TO) Italy - ',
					type: 'text'
				},
				{
					url: 'https://www.delfinvacuums.com/',
					type: 'link',
					children: [
						{
							text: 'https://www.delfinvacuums.com/',
							type: 'text'
						}
					]
				},
				{
					text: ') เพื่อเสริมสร้างความสัมพันธ์กับผู้ผลิตและเข้ารับการฝึกอบรมเชิงลึกในด้าน:',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: '',
					type: 'text'
				}
			]
		},
		{
			type: 'list',
			format: 'unordered',
			children: [
				{
					type: 'list-item',
					children: [
						{
							text: 'การขายและการให้คำปรึกษาโซลูชัน',
							type: 'text'
						}
					]
				}
			]
		},
		{
			type: 'list',
			format: 'unordered',
			children: [
				{
					type: 'list-item',
					children: [
						{
							text: 'การติดตั้งระบบเครื่องดูดฝุ่นอุตสาหกรรม',
							type: 'text'
						}
					]
				}
			]
		},
		{
			type: 'list',
			format: 'unordered',
			children: [
				{
					type: 'list-item',
					children: [
						{
							text: 'การบำรุงรักษาและบริการหลังการขาย',
							type: 'text'
						}
					]
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: '',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'การฝึกอบรมครอบคลุมผลิตภัณฑ์ทุกประเภท รวมถึงรุ่นมาตรฐาน ระบบ ATEX (ป้องกันการระเบิด) และโซลูชันเกรดเภสัชกรรมที่ต้องการมาตรฐานความสะอาดและความปลอดภัยในระดับสูงสุด',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'ความร่วมมือนี้ช่วยให้เราสามารถส่งมอบเทคโนโลยีเครื่องดูดฝุ่นประสิทธิภาพสูงสำหรับใช้งานในอุตสาหกรรมที่หลากหลาย รวมถึงการผลิตอาหารและเครื่องดื่ม การผลิตสารเคมี และภาคเภสัชกรรม',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: '',
					type: 'text'
				}
			]
		},
		{
			type: 'heading',
			level: 4,
			children: [
				{
					bold: true,
					text: 'เกี่ยวกับ Delfin',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'Delfin (Delfin Industrial Vacuums) ก่อตั้งขึ้นในปี 1991 โดย Antonino Siclari ในประเทศอิตาลี ด้วยวิสัยทัศน์ในการสร้างระบบเครื่องดูดฝุ่นอุตสาหกรรมที่มีประสิทธิภาพ ปลอดภัย และสามารถตอบสนองความต้องการที่หลากหลายของผู้ใช้งาน เป็นเวลากว่า 30 ปี Delfin ได้พัฒนานวัตกรรมและเทคโนโลยีใหม่ๆ อย่างต่อเนื่อง ตั้งแต่เครื่องดูดฝุ่นอุตสาหกรรมมาตรฐานไปจนถึงระบบ ATEX (ป้องกันการระเบิด) รวมถึงโซลูชันเฉพาะสำหรับอุตสาหกรรมเภสัชกรรมและอาหาร',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'ปัจจุบัน เครือข่ายการจำหน่ายและบริการของ Delfin ครอบคลุมกว่า 40 ประเทศทั่วโลก และบริษัทได้รับการยอมรับว่าเป็นผู้นำด้านคุณภาพ ความน่าเชื่อถือ และการบริการในตลาดโซลูชันเครื่องดูดฝุ่นอุตสาหกรรม',
					type: 'text'
				}
			]
		}
	]);
</script>

<h1>Blocks Renderer Demo</h1>
<p>Testing the Svelte 5 port of the React blocks renderer</p>

<div class="demo">
	<BlocksRenderer {content} />
</div>
