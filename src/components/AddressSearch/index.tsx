import React, { useState, useEffect, useCallback } from 'react';
import * as S from './style';
import { Input } from 'components';
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

interface AddressSearchProps {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
}

const AddressSearch = ({ register, setValue, watch }: AddressSearchProps) => {
  const [results, setResults] = useState<Array<[string, string, string]>>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [pickResult, setPickResult] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [resultClicked, setResultClicked] = useState(false);

  const promiseContent = watch('promise');

  // handleApiResponse를 useCallback으로 메모이제이션
  const handleApiResponse = useCallback((data: any) => {
    if (data.results.common.errorCode === '0') {
      const addresses = extractAddresses(data.results.juso);
      setResults(addresses);
      setErrorMessage('');
    } else {
      setResults([]);
      setErrorMessage(data.results.common.errorMessage);
    }
  }, []);

  const searchJuso = useCallback(
    (query: string) => {
      const confmKey = 'devU01TX0FVVEgyMDI0MTAwNjAyMzMwNDExNTEzMTg=';
      const apiUrl = createApiUrl(confmKey, query);

      (window as any).callbackFunc = (data: any) => handleApiResponse(data);
      loadApiScript(apiUrl);
    },
    [handleApiResponse],
  );

  useEffect(() => {
    if (!pickResult) {
      if (promiseContent) {
        searchJuso(promiseContent);
        setShowResults(true);
      } else {
        setResults([]);
        setErrorMessage('');
        setShowResults(false);
      }
    }
  }, [promiseContent, pickResult, searchJuso]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '';
    setValue('promise', value);
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setPickResult(false);
    setShowResults(true);
    setResultClicked(false);
  };

  const handleInputBlur = () => {
    if (!resultClicked) {
      setShowResults(false);
    }
  };

  const createApiUrl = (confmKey: string, query: string) => {
    return `https://business.juso.go.kr/addrlink/addrLinkApiJsonp.do?confmKey=${confmKey}&keyword=${encodeURIComponent(query)}&resultType=json&callback=callbackFunc`;
  };

  const extractAddresses = (jusoList: any[]): [string, string, string][] => {
    return jusoList.map(
      (item) =>
        [item.emdNm, item.roadAddrPart1, item.bdNm] as [string, string, string],
    );
  };

  const loadApiScript = (url: string) => {
    if (!document.querySelector(`script[src="${url}"]`)) {
      const script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    }
  };

  const handleResultMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    result: [string, string, string],
  ) => {
    e.stopPropagation();
    const selectedAddress = result.join(' ');
    setValue('promise', selectedAddress);
    setPickResult(true);
    setShowResults(false);
    setResultClicked(true);
  };

  return (
    <S.SearchBox>
      <Input
        title="약속장소"
        icon={true}
        required={true}
        placeholder="약속 장소를 입력해 주세요"
        value={promiseContent}
        onChange={(e) => {
          handleInputChange(e);
          register('promise', {
            required: true,
          }).onChange(e);
        }}
        onClick={handleInputClick}
        onBlur={(e) => {
          handleInputBlur();
          register('promise', {
            required: true,
          }).onBlur(e);
        }}
      />
      {promiseContent && showResults && (
        <S.SearchResultsContainer>
          {results.length > 0
            ? results.map((result, index) => (
                <S.SearchResultItem
                  key={index}
                  onMouseDown={(e) => handleResultMouseDown(e, result)}>
                  <span>{result[0]} &nbsp;</span>
                  {result[1]} &nbsp; {result[2]}
                </S.SearchResultItem>
              ))
            : errorMessage && <div>{errorMessage}</div>}
          <S.BottomBlur />
        </S.SearchResultsContainer>
      )}
    </S.SearchBox>
  );
};

export default AddressSearch;
