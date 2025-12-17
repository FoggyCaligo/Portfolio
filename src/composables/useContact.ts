// src/composables/useContact.ts
export type ContactItem = {
  key: string
  label: string
  value: string
  copyable?: boolean
}

export const useContact = () => {
  const contacts: ContactItem[] = [
    {
      key: 'phone-personal',
      label: 'Phone',
      value: '010 6716 7075',
      copyable: true,
    },
    {
      key: 'email-personal',
      label: 'Email',
      value: 'biglai@naver.com',
      copyable: true,
    },
    // 나중에 여기만 추가
    // { label: 'Kakao', value: 'xxxx' }
  ]

  const copyContact = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      alert('복사되었습니다.')
    } catch {
      alert('복사에 실패했습니다.')
    }
  }

  return {
    contacts,
    copyContact,
  }
}
