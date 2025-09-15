import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 시딩을 시작합니다...');

  // 기존 데이터 삭제 (개발 환경에서만)
  await prisma.comment.deleteMany();
  await prisma.article.deleteMany();
  await prisma.product.deleteMany();

  // 샘플 상품 데이터 생성
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'MacBook Pro 13인치',
        description: 'M2 칩이 탑재된 MacBook Pro 13인치입니다. 거의 새것이고 박스와 충전기 모두 포함되어 있습니다.',
        price: 1500000,
        tags: ['노트북', '애플', 'MacBook', 'M2'],
      },
    }),
    prisma.product.create({
      data: {
        name: '아이폰 14 Pro',
        description: '아이폰 14 Pro 딥퍼플 128GB. 사용감 거의 없고 보호필름과 케이스 포함입니다.',
        price: 1200000,
        tags: ['스마트폰', '애플', '아이폰', '14Pro'],
      },
    }),
    prisma.product.create({
      data: {
        name: '에어팟 프로 2세대',
        description: '에어팟 프로 2세대. 노이즈 캔슬링 기능 완벽하고 충전 케이스 포함입니다.',
        price: 280000,
        tags: ['이어폰', '애플', '에어팟', '무선'],
      },
    }),
    prisma.product.create({
      data: {
        name: '닌텐도 스위치 OLED',
        description: '닌텐도 스위치 OLED 모델. 조이콘 2개와 게임 3개 포함해서 판매합니다.',
        price: 450000,
        tags: ['게임기', '닌텐도', '스위치', 'OLED'],
      },
    }),
    prisma.product.create({
      data: {
        name: '삼성 갤럭시 버드2 프로',
        description: '삼성 갤럭시 버드2 프로. 노이즈 캔슬링과 액티브 노이즈 캔슬링 지원합니다.',
        price: 200000,
        tags: ['이어폰', '삼성', '갤럭시버드', '무선'],
      },
    }),
  ]);

  console.log(`✅ ${products.length}개의 상품이 생성되었습니다.`);

  // 샘플 게시글 데이터 생성
  const articles = await Promise.all([
    prisma.article.create({
      data: {
        title: '판다마켓 이용 후기',
        content: `안녕하세요! 판다마켓을 이용한 지 한 달이 되어서 후기를 남겨봅니다.

처음에는 중고거래가 걱정되었는데, 판다마켓의 안전한 거래 시스템 덕분에 걱정 없이 거래할 수 있었습니다.

특히 상품 등록이 간편하고, 검색 기능도 정말 좋아서 원하는 상품을 쉽게 찾을 수 있었어요.

앞으로도 계속 이용할 예정입니다!`,
      },
    }),
    prisma.article.create({
      data: {
        title: '중고거래 시 주의사항',
        content: `중고거래를 할 때 주의해야 할 점들을 정리해봤습니다.

1. 상품 상태를 정확히 확인하기
2. 거래 전에 충분한 소통하기
3. 안전한 거래 장소에서 만나기
4. 거래 완료 후 즉시 확인하기

이런 점들을 지키면 안전하고 만족스러운 거래를 할 수 있을 거예요!`,
      },
    }),
    prisma.article.create({
      data: {
        title: 'MacBook 구매 후기',
        content: `지난주에 판다마켓에서 MacBook Pro를 구매했습니다.

판매자분이 정말 친절하게 설명해주셔서 좋았고, 상품 상태도 설명과 정확히 일치했습니다.

배송도 빠르고 포장도 깔끔하게 해주셔서 만족스러운 구매였습니다.

앞으로도 판다마켓에서 필요한 물건들을 구매할 예정이에요!`,
      },
    }),
    prisma.article.create({
      data: {
        title: '판다마켓 커뮤니티 활성화 제안',
        content: `안녕하세요! 판다마켓 커뮤니티를 더 활성화할 수 있는 방법을 제안드립니다.

1. 주간 베스트 상품 게시
2. 사용자 후기 모음
3. 거래 팁 공유 게시판
4. 지역별 모임 게시판

이런 기능들이 있으면 더욱 활발한 커뮤니티가 될 것 같아요!`,
      },
    }),
    prisma.article.create({
      data: {
        title: '스마트폰 거래 시 체크리스트',
        content: `스마트폰을 중고로 구매할 때 확인해야 할 체크리스트입니다.

📱 외관 상태
- 화면 스크래치 여부
- 케이스 착용 흔적
- 충전 포트 상태

🔧 기능 테스트
- 카메라 작동
- 스피커/마이크
- 터치 반응
- 배터리 상태

📋 서류 확인
- 구매 영수증
- A/S 가능 여부
- 잠금 해제 상태

이런 점들을 꼼꼼히 확인하시면 안전한 거래가 가능할 거예요!`,
      },
    }),
  ]);

  console.log(`✅ ${articles.length}개의 게시글이 생성되었습니다.`);

  // 샘플 댓글 데이터 생성
  const comments = await Promise.all([
    // 상품 댓글
    prisma.comment.create({
      data: {
        content: '정말 좋은 상품이네요! 가격 협상 가능한가요?',
        productId: products[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: '직거래 가능한 지역이 어디인가요?',
        productId: products[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: '배터리 상태는 어떤가요?',
        productId: products[1].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: '박스와 액세서리 모두 포함인가요?',
        productId: products[2].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: '게임 목록 알려주세요!',
        productId: products[3].id,
      },
    }),
    
    // 게시글 댓글
    prisma.comment.create({
      data: {
        content: '저도 판다마켓 정말 좋아해요! 안전한 거래가 가능해서 마음에 듭니다.',
        articleId: articles[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: '좋은 후기 감사합니다. 저도 이용해볼게요!',
        articleId: articles[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: '정말 유용한 정보네요. 감사합니다!',
        articleId: articles[1].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'MacBook 구매하시길 축하드려요! 저도 관심있었는데 참고하겠습니다.',
        articleId: articles[2].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: '좋은 제안이네요! 커뮤니티 활성화에 도움이 될 것 같아요.',
        articleId: articles[3].id,
      },
    }),
  ]);

  console.log(`✅ ${comments.length}개의 댓글이 생성되었습니다.`);

  console.log('🎉 시딩이 완료되었습니다!');
}

main()
  .catch((e) => {
    console.error('❌ 시딩 중 오류가 발생했습니다:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
