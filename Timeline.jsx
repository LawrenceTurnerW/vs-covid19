function Timeline(props) {
  const coronaList = props.coronadata.map((Co) => (
    <COVID
      key={Co.サービス名称}
      field={Co.分野}
      service={Co.サービス分類}
      word={Co.キーワード}
      name={Co.サービス名称}
      target={Co.対象者}
      start={Co.開始日}
      end={Co.終了日}
      period_remarks={Co.期間備考}
      support={Co.導入支援有無}
      company={Co.企業等}
      details={Co.詳細}
      announcement={Co.発表日付}
      URL={Co.URL}
      source={Co.情報源}
    />
  ));

  // 表示する
  return <div className="timeline">{coronaList}</div>;
}
