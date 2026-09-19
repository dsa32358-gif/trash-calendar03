// シフト間隔
// 現在は動作確認用として6秒

const music = new Audio('sounds/sound01.mp3');



// ============================================================
// 「ゴミ収集なし」のアイコン
// ============================================================

const NOTHING_IMAGE = "images/nothing.png";


// ============================================================
// ゴミの種類とアイコン
// ============================================================

const garbageTypes = {

	// --------------------------------------------------------
	// 燃えるごみ
	// --------------------------------------------------------

	fire: {
		name: "燃えるゴミ",
		image: "images/fire.png"
	},


	// --------------------------------------------------------
	// プラスチック
	// --------------------------------------------------------

	plastic: {
		name: "資源ゴミ",
		image: "images/plastic.png"
	},


	// --------------------------------------------------------
	// 埋立・特定
	// --------------------------------------------------------

	land: {
		name: "埋立ゴミ",
		image: "images/land.png"
	},


	// --------------------------------------------------------
	// 金属
	// --------------------------------------------------------

	metal: {
		name: "資源ゴミ",
		image: "images/metal.png"
	},


	// --------------------------------------------------------
	// 紙
	// --------------------------------------------------------

	paper: {
		name: "資源ゴミ",
		image: "images/paper.png"
	},


	// --------------------------------------------------------
	// リサイクルステーション
	// --------------------------------------------------------

		recycleA: {
		name:"リサイクル",
		image: "images/nothingA.png"
	},

	recycleI: {
		name: "リサイクル",
		image: "images/nothingI.png"
	},

	recycleU: {
		name: "リサイクル",
		image: "images/nothingU.png"
	},

	recycleE: {
		name: "リサイクル",
		image: "images/nothingE.png"
	},

	recycleO: {
		name: "リサイクル",
		image: "images/nothingO.png"
	},

	recycleKa: {
		name: "リサイクル",
		image: "images/nothingKA.png"
	},

	recycleKi: {
		name: "リサイクル",
		image: "images/nothingKI.png"
	},

	recycleKu: {
		name: "リサイクル",
		image: "images/nothingKU.png"
	}
};


// ============================================================
// カレンダー
//
// 「日付 : ゴミの種類」
//
// データがない日
// ↓
// ゴミ収集なし
// ============================================================

const calendarData = {

  "2026-09-19": "recycleKi",

  "2026-09-21": "paper",
  "2026-09-22": "fire",
  "2026-09-24": "plastic",
  "2026-09-25": "fire",
  "2026-09-26": "recycleKu",

  "2026-09-28": "metal",
  "2026-09-29": "fire",

  "2026-10-01": "plastic",
  "2026-10-02": "fire",
  "2026-10-03": "recycleA",

  "2026-10-05": "paper",
  "2026-10-06": "fire",
  "2026-10-07": "land",
  "2026-10-08": "plastic",
  "2026-10-09": "fire",
  "2026-10-10": "recycleI",

  "2026-10-12": "metal",
  "2026-10-13": "fire",
  "2026-10-15": "plastic",
  "2026-10-16": "fire",
  "2026-10-17": "recycleU",

  "2026-10-19": "paper",
  "2026-10-20": "fire",
  "2026-10-21": "land",
  "2026-10-22": "plastic",
  "2026-10-23": "fire",
  "2026-10-24": "recycleE",

  "2026-10-26": "metal",
  "2026-10-27": "fire",
  "2026-10-29": "plastic",
  "2026-10-30": "fire",

  "2026-11-02": "paper",
  "2026-11-03": "fire",
  "2026-11-04": "land",
  "2026-11-05": "plastic",
  "2026-11-06": "fire",
  "2026-11-07": "recycleO",

  "2026-11-09": "metal",
  "2026-11-10": "fire",
  "2026-11-12": "plastic",
  "2026-11-13": "fire",
  "2026-11-14": "recycleKa",

  "2026-11-16": "paper",
  "2026-11-17": "fire",
  "2026-11-18": "land",
  "2026-11-19": "plastic",
  "2026-11-20": "fire",
  "2026-11-21": "recycleKi",

  "2026-11-23": "metal",
  "2026-11-24": "fire",
  "2026-11-26": "plastic",
  "2026-11-27": "fire",
  "2026-11-28": "recycleKu",

  "2026-12-01": "fire",
  "2026-12-02": "land",
  "2026-12-03": "plastic",
  "2026-12-04": "fire",
  "2026-12-05": "recycleA",

  "2026-12-07": "paper",
  "2026-12-08": "fire",
  "2026-12-10": "plastic",
  "2026-12-11": "fire",
  "2026-12-12": "recycleI",

  "2026-12-14": "metal",
  "2026-12-15": "fire",
  "2026-12-16": "land",
  "2026-12-17": "plastic",
  "2026-12-18": "fire",
  "2026-12-19": "recycleU",

  "2026-12-21": "paper",
  "2026-12-22": "fire",
  "2026-12-24": "plastic",
  "2026-12-25": "fire",
  "2026-12-26": "recycleE",

  "2026-12-28": "metal",
  "2026-12-29": "fire",
  "2026-12-31": "plastic",

  "2027-01-04": "paper",
  "2027-01-05": "fire",
  "2027-01-06": "land",
  "2027-01-07": "plastic",
  "2027-01-08": "fire",
  "2027-01-09": "recycleO",

  "2027-01-11": "metal",
  "2027-01-12": "fire",
  "2027-01-14": "plastic",
  "2027-01-15": "fire",
  "2027-01-16": "recycleKa",

  "2027-01-18": "paper",
  "2027-01-19": "fire",
  "2027-01-20": "land",
  "2027-01-21": "plastic",
  "2027-01-22": "fire",
  "2027-01-23": "recycleKi",

  "2027-01-25": "metal",
  "2027-01-26": "fire",
  "2027-01-28": "plastic",
  "2027-01-29": "fire",
  "2027-01-30": "recycleKu",

  "2027-02-01": "paper",
  "2027-02-02": "fire",
  "2027-02-03": "land",
  "2027-02-04": "plastic",
  "2027-02-05": "fire",
  "2027-02-06": "recycleA",

  "2027-02-08": "metal",
  "2027-02-09": "fire",
  "2027-02-11": "plastic",
  "2027-02-12": "fire",
  "2027-02-13": "recycleI",

  "2027-02-15": "paper",
  "2027-02-16": "fire",
  "2027-02-17": "land",
  "2027-02-18": "plastic",
  "2027-02-19": "fire",
  "2027-02-20": "recycleU",

  "2027-02-22": "metal",
  "2027-02-23": "fire",
  "2027-02-25": "plastic",
  "2027-02-26": "fire",
  "2027-02-27": "recycleE",

  "2027-03-01": "paper",
  "2027-03-02": "fire",
  "2027-03-03": "land",
  "2027-03-04": "plastic",
  "2027-03-05": "fire",
  "2027-03-06": "recycleO",

  "2027-03-08": "metal",
  "2027-03-09": "fire",
  "2027-03-11": "plastic",
  "2027-03-12": "fire",
  "2027-03-13": "recycleKa",

  "2027-03-15": "paper",
  "2027-03-16": "fire",
  "2027-03-17": "land",
  "2027-03-18": "plastic",
  "2027-03-19": "fire",
  "2027-03-20": "recycleKi",

  "2027-03-22": "metal",
  "2027-03-23": "fire",
  "2027-03-25": "plastic",
  "2027-03-26": "fire",
  "2027-03-27": "recycleKu",

  "2027-03-30": "fire"
	
};


// ============================================================
// 現在表示している7日間の日付
// ============================================================

let currentDates = [];


// ============================================================
// 曜日の名前
// ============================================================

const weekNames = [
	"日",
	"月",
	"火",
	"水",
	"木",
	"金",
	"土"
];


// ============================================================
// 日付を YYYY-MM-DD に変換
// ============================================================

function formatDateKey(date) {

	const year =
		date.getFullYear();

	const month =
		String(
			date.getMonth() + 1
		).padStart(2, "0");

	const day =
		String(
			date.getDate()
		).padStart(2, "0");

	return `${year}-${month}-${day}`;
}


// ============================================================
// 日付を表示用に変換
// ============================================================

function formatDateText(date) {

	const month =
		date.getMonth() + 1;

	const day =
		date.getDate();

	return `${month}/${day}`;
}


// ============================================================
// 指定した日付の翌日を取得
// ============================================================

function getNextDate(date) {

	const nextDate =
		new Date(date);

	nextDate.setDate(
		nextDate.getDate() + 1
	);

	return nextDate;
}


// ============================================================
// Boxの要素を取得
// ============================================================

function getBoxes() {

	const boxes = [];

	for (
		let i = 1;
		i <= 7;
		i++
	) {

		const box =
			document.querySelector(
				`.box-${i}`
			);

		if (box) {
			boxes.push(box);
		}
	}

	return boxes;
}


// ============================================================
// 「予定なし」を表示
//
//    nothing.png
//    予定なし
// ============================================================

function renderNoData(dataElement) {

	// 既存の表示を消す
	dataElement.innerHTML = "";


	// --------------------------------------------------------
	// nothing.png
	// --------------------------------------------------------

	const image =
		document.createElement("img");

	image.src =
		NOTHING_IMAGE;

	image.alt =
		"ゴミ収集なし";

	dataElement.appendChild(image);


	// --------------------------------------------------------
	// 「予定なし」
	// --------------------------------------------------------

	const text =
		document.createElement("div");

	text.className =
		"no-data";

	text.textContent =
		"回収なし";

	dataElement.appendChild(text);
}


// ============================================================
// ゴミの種類をBoxへ表示
// ============================================================

function renderGarbage(
	dataElement,
	garbage
) {

	// 既存の表示を消す
	dataElement.innerHTML = "";


	// --------------------------------------------------------
	// 画像
	// --------------------------------------------------------

	if (garbage.image) {

		const image =
			document.createElement("img");

		image.src =
			garbage.image;

		image.alt =
			garbage.name;

		dataElement.appendChild(image);
	}


	// --------------------------------------------------------
	// ゴミの種類
	// --------------------------------------------------------

	const text =
		document.createElement("div");

	text.textContent =
		garbage.name;

	dataElement.appendChild(text);
}


// ============================================================
// 1日分のデータをBoxへ表示
// ============================================================

function renderBox(
	box,
	date
) {

	// --------------------------------------------------------
	// 各要素を取得
	// --------------------------------------------------------

	const dayElement =
		box.querySelector(".boxtext");

	const dateElement =
		box.querySelector(".boxdate");

	const dataElement =
		box.querySelector(".boxdata");


	// --------------------------------------------------------
	// 曜日
	// --------------------------------------------------------

	const dayIndex =
		date.getDay();

	dayElement.textContent =
		weekNames[dayIndex];


	// --------------------------------------------------------
	// 日付
	// --------------------------------------------------------

	dateElement.textContent =
		formatDateText(date);


	// --------------------------------------------------------
	// 日曜日・土曜日のクラスをリセット
	// --------------------------------------------------------

	box.classList.remove(
		"sunday",
		"saturday"
	);


	// --------------------------------------------------------
	// 日曜日
	// --------------------------------------------------------

	if (dayIndex === 0) {

		box.classList.add(
			"sunday"
		);
	}


	// --------------------------------------------------------
	// 土曜日
	// --------------------------------------------------------

	if (dayIndex === 6) {

		box.classList.add(
			"saturday"
		);
	}


	// --------------------------------------------------------
	// カレンダーデータを取得
	// --------------------------------------------------------

	const dateKey =
		formatDateKey(date);

	const type =
		calendarData[dateKey];


	// --------------------------------------------------------
	// 予定がない場合
	// --------------------------------------------------------

	if (!type) {

		renderNoData(
			dataElement
		);

		return;
	}


	// --------------------------------------------------------
	// ゴミの種類を取得
	// --------------------------------------------------------

	const garbage =
		garbageTypes[type];


	// --------------------------------------------------------
	// 登録されていないゴミ種類の場合
	// --------------------------------------------------------

	if (!garbage) {

		renderNoData(
			dataElement
		);

		return;
	}


	// --------------------------------------------------------
	// ゴミ情報を表示
	// --------------------------------------------------------

	renderGarbage(
		dataElement,
		garbage
	);
}


// ============================================================
// 7つのBoxをすべて描画
// ============================================================

function renderAllBoxes() {

	const boxes =
		getBoxes();


	boxes.forEach(
		(box, index) => {

			if (currentDates[index]) {

				renderBox(
					box,
					currentDates[index]
				);

			}

		}
	);
}


// ============================================================
// 「明日は」のBoxを更新
//
// box-1から出ていった予定を表示します。
// ============================================================

function renderOverflow(date) {

	const box8 =
		document.querySelector(
			".box-8"
		);


	// Box-8が存在しない場合
	if (!box8) {
		return;
	}


	const dataElement =
		box8.querySelector(
			".boxdata"
		);


	// --------------------------------------------------------
	// 日付からデータを取得
	// --------------------------------------------------------

	const dateKey =
		formatDateKey(date);

	const type =
		calendarData[dateKey];


	// --------------------------------------------------------
	// 予定がない場合
	// --------------------------------------------------------

	if (!type) {

		renderNoData(
			dataElement
		);

		return;
	}


	// --------------------------------------------------------
	// ゴミの種類を取得
	// --------------------------------------------------------

	const garbage =
		garbageTypes[type];


	// --------------------------------------------------------
	// 登録されていない場合
	// --------------------------------------------------------

	if (!garbage) {

		renderNoData(
			dataElement
		);

		return;
	}


	// --------------------------------------------------------
	// 「明日は」用の表示
	//
	// box-8は横並び表示にするため、
	// renderGarbage()とは別処理にしています。
	// --------------------------------------------------------

	dataElement.innerHTML = "";


	// --------------------------------------------------------
	// 画像
	// --------------------------------------------------------

	if (garbage.image) {

		const image =
			document.createElement("img");

		image.src =
			garbage.image;

		image.alt =
			garbage.name;

		dataElement.appendChild(image);
	}


	// --------------------------------------------------------
	// ゴミの種類
	// --------------------------------------------------------

	const text =
		document.createElement("span");

	text.textContent =
		garbage.name;

	dataElement.appendChild(text);
}


// シフト

function shiftDays() {

    const overflowDate =
        currentDates[0];

    currentDates.shift();


	// --------------------------------------------------------
	// 一番右に翌日を追加
	// --------------------------------------------------------

	const lastDate =
		currentDates[
			currentDates.length - 1
		];


	const nextDate =
		getNextDate(lastDate);


	currentDates.push(
		nextDate
	);


	// --------------------------------------------------------
	// Boxを再描画
	// --------------------------------------------------------

	renderAllBoxes();


	// --------------------------------------------------------
	// 左端から出た予定をbox-8へ
	// --------------------------------------------------------

	renderOverflow(
		overflowDate
	);
	
	music.currentTime = 0;
	music.play();
	
	// box8とbox1のデータを読み上げ
	speakShiftData();
	}


// ============================================================
// 初期日付を設定
//
// 今日から7日分を作ります。
// ============================================================

function initializeDates() {

	const today =
		new Date();


	currentDates = [];


	for (
		let i = 0;
		i < 7;
		i++
	) {

		const date =
			new Date(today);


		date.setDate(
			today.getDate() + i
		);


		currentDates.push(
			date
		);
	}
}


// ============================================================
// ページ読み込み
// ============================================================

document.addEventListener(
	"DOMContentLoaded",
	() => {


		// ----------------------------------------------------
		// 今日から7日分を準備
		// ----------------------------------------------------

		initializeDates();


		// ----------------------------------------------------
		// 7つのBoxへ表示
		// ----------------------------------------------------

		renderAllBoxes();


		// ----------------------------------------------------
		// 最初はbox-8を空欄にする
		//
		// 7日表示から出ていくまでは
		// 「明日は」欄を空欄に
		// ----------------------------------------------------

		const box8 =
			document.querySelector(
				".box-8"
			);


		if (box8) {

			const box8Data =
				box8.querySelector(
					".boxdata"
				);


			if (box8Data) {

				box8Data.innerHTML = "";
			}
		}


	    // ====================================================
        // 毎分、指定時刻になったか確認
        // ====================================================

        setInterval(
            checkDailyShift,
            60 * 1000
        );

        // ページ読み込み時にも確認
        checkDailyShift();


	}
);





// ============================================================
// 毎日のシフト設定
// ============================================================

// シフトする時刻
const SHIFT_HOUR = 13;   // 時
const SHIFT_MINUTE = 30; // 分


// ============================================================
// 指定時刻になったか確認
// ============================================================

function checkDailyShift() {

    const now = new Date();

    const currentHour =
        now.getHours();

    const currentMinute =
        now.getMinutes();

    const todayKey =
        now.toLocaleDateString("ja-JP");


    // 今日すでにシフトしたか確認
    const lastShiftDate =
        localStorage.getItem("lastShiftDate");


    // 指定時刻より前なら何もしない
    if (
        currentHour < SHIFT_HOUR ||
        (
            currentHour === SHIFT_HOUR &&
            currentMinute < SHIFT_MINUTE
        )
    ) {
        return;
    }


    // 今日すでにシフト済みなら何もしない
    //if (lastShiftDate === todayKey) {
       // return;
  //  }


    // 1日分シフト
    shiftDays();


    // シフトした日を保存
    localStorage.setItem(
        "lastShiftDate",
        todayKey
    );

}





// ============================================================
// 音声読み上げ
// ============================================================

function speakShiftData() {

    // 少し待ってから、再描画後のデータを取得
    setTimeout(() => {

        const box8 = document.querySelector(".box-1");
        const box1 = document.querySelector(".box-8");

        if (!box8 || !box1) return;

        const box8Data =
            box8.querySelector(".boxdata");

        const box1Data =
            box1.querySelector(".boxdata");

        if (!box8Data || !box1Data) return;

        const text8 =
            box8Data.textContent.trim();

        const text1 =
            box1Data.textContent.trim();

        let speechText = "";



		// 今日の回収内容
		if (text1 && text1 !== "回収なし") {
			speechText +=
				"今日は" + text1 + "の回収びです。";
		} else {
			speechText +=
				"今日はごみの回収はありません。";
		}


		// 明日の回収内容
		if (text8 && text8 !== "回収なし") {
			speechText +=
				"また、明日は" + text8 + "の回収びです。";
		} else {
			speechText +=
				"また、明日はごみの回収はありません。";
		}

        if (!speechText) return;


        // 前の読み上げを停止
        window.speechSynthesis.cancel();

        const utterance =
            new SpeechSynthesisUtterance(speechText);

        utterance.lang = "ja-JP";
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        window.speechSynthesis.speak(utterance);

    }, 300);
}
