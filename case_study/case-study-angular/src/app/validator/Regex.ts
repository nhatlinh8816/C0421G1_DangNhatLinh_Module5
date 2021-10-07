export class Regex {
  static CUSTOMER_CODE_REGEX = '^(KH-)[0-9]{4}$';
  static SERVICE_CODE_REGEX = '^(DV-)[0-9]{4}$';
  static PHONE_NUMBER_REGEX = '^((\\(84\\)\\+(90))|(090)|(091)|(\\(84\\)\\+(91)))[\\d]{7}$';
  static IDENTITY_CARD_REGEX = '^[\\d]{9,10}$';
  static NAME_PERSON_REGEX = '([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})|(\\s[0-9])){0,5}$';
}
