/**
 * 뮤직비디오(결정알고리즘)
 * @param {number[]} songs
 * @param {number} m
 * @return {number} DVD의 '최소' 용량 크기
 * 지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다.
 * DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지되어야 한다. 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다.
 * 즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다.
 * 또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
 * 지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다.
 * 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기로 하였다. 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다
 * 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.
 * 첫 번째 줄부터 DVD의 최소 용량 크기를 출력해라.
 * m : 1 <= m <= arr.length
 */

function solution(m, songs) {
  //   songs.sort((a, b) => a - b);
  let answer;
  // 최소 용량은 songs 중 가장 큰 값
  let start = Math.max(...songs);
  // 최대 용량은 모든 노래를 다 더한 값
  let end = songs.reduce((prev, curr) => prev + curr, 0);

  const countDVD = (mid) => {
    // 일단 한장은 무조건 들어가니까 cnt은 1로 초기화
    let cnt = 1;
    let sum = 0;
    songs.forEach((song) => {
      // 저장할 수 있는지 확인 후 분기 처리
      if (sum + song > mid) {
        cnt++;
        sum = song;
      } else sum += song;
    });
    return cnt;
  };

  // 이분검색
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    // dvd 개수가 m 이하면 됨!
    // ->  mid 용량을 가진 DVD로 m이하의 장수로 모든 노래를 순서를 유지하면서 저장할 수 있다는 뜻
    // 그래서 countDVD(mid) <= m 일 때 mid 용량을 answer에 담아주고 더 좋은 답을 찾기 위해 이분검색을 이용하여 범위를 좁혀가며 탐색하는 것!
    if (countDVD(mid) <= m) {
      answer = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return answer;
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 15, 13, 17
// 3개의 DVD용량이 17분짜리면 (1,2,3,4,5) (6,7) (8,9) 이렇게 3개의 DVD로 녹음할수있음
// 17분의 용량보다 작은 용량으로는 3개의 모든 영상을 녹화할 수 없음
